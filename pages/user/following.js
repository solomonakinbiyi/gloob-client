import { useContext, useState, useEffect } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const Following = () => {
  const [state, setState] = useContext(UserContext);

  //   state
  const [people, setPeople] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");
      // console.log('following => ', data);
      setPeople(data)
    } catch (err) {
      console.log(err);
    }
  };

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "/images/logo.png";
    }
  };
  const handleUnfollow = async (user) => {
    try {
        const {data} = await axios.put('/user-unfollow', {_id: user._id})
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update context
        setState({ ...state, user: data });
        // update people state
        let filtered = people.filter((person) => person._id !== user._id);
        setPeople(filtered);
        toast.error(`Unfollowed ${user.name}`);
    } catch (err) {
        
    }
  };
  return (
    <div className="row col-md-6 offset-md-3" id='flwnglist'>
      {/* <pre>{JSON.stringify(people, null, 4)}</pre> */}
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              //   avatar={<Avatar src={user.image && user.image.url} />}
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  <div>
                    {user.username}{" "}
                    <div>
                      <span style={{ color: "#303134" }}>
                        {user.about
                          ? user.about
                          : "Hey there! I'm using Gloob."}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: "gray" }}>
                        <span>{user.followers.length}&nbsp;</span>
                        followers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span style={{ color: "gray" }}>
                        <span>{user.following.length}&nbsp;</span> following
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-primary pointer"
                    onClick={() => handleUnfollow(user)}
                  >
                    Unfollow
                  </span>
                </div>
              }
              //   description={user.about && user.about}
              description=""
            />
          </List.Item>
        )}
      />
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center pt-5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default Following;
