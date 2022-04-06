import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { Toast } from "react-toastify";
import Post from "../../components/cards/Post";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const PostComments = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeComment = async (postId, comment) => {
    //   console.log(postId, comment);
    let answer = window.confirm('Are you sure?')
    if(!answer) return
    try {
      const { data } = await axios.put("/remove-comment", {
        postId,
        comment,
      });
      // console.log('comment removed', data);
      fetchPost()
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1>News feed</h1>
        </div>
      </div>
      <div className="container col-md-8 offset-md-2 pt-5">
        <div
          className=""
          style={{
            width: "100%",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Post post={post} commentsCount={100} removeComment={removeComment} />
        </div>
      </div>
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center p-5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default PostComments;
