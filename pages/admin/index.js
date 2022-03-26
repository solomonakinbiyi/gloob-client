import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import AdminRoute from "../../components/routes/AdminRoute";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import renderHTML from "react-render-html";


const Admin = () => {
  const [state, setState] = useContext(UserContext);

  // posts
  const [posts, setPosts] = useState([]);

  // route
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
    }
  }, [state && state.token]);

  const newsFeed = async () => {
    try {
      const { data } = await axios.get(`/posts`);
    //   console.log("user posts => ", data);
      setPosts(data);
      console.log("user posts => ", posts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;

      const { data } = await axios.delete(`/admin/delete-post/${post._id}`);
      toast.error("Post deleted");
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminRoute>
      <div className="container-fluid">
        <div className="row py-5 bg-default-image text-light">
          <div className="col text-center">
            <h1>ADMIN</h1>
          </div>
        </div>
        <div
          className="row py-4"
          style={{
            width: "100%",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="col-md-8 offset-md-2">
            {posts &&
              posts.map((post) => (
                <div className="d-flex justify-content-between" key={post._id} style={{}}>
                  <div className="">
                    {renderHTML(post.content)} - <b>{post.postedBy.name}</b>
                  </div>
                  <div
                    className="text-danger"
                    onClick={() => handleDelete(post)}
                  >
                    Delete
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default Admin;
