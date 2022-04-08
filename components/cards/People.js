import { useContext } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { imageSource } from "../../functions";
import Link from "next/link";

const People = ({ people, handleFollow, handleUnfollow }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
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
                  <Link href={`/user/${user.username}`}>
                    <a>
                      {user.username} <br />{" "}
                      <span style={{ color: "#303134" }}>
                        {user.about ? user.about : "Hey there! I'm using Gloob."}
                      </span>
                      <br />{" "}
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
                    </a>
                  </Link>
                  {state &&
                  state.user &&
                  user.followers &&
                  user.followers.includes(state.user._id) ? (
                    <span
                      className="text-primary pointer"
                      onClick={() => handleUnfollow(user)}
                    >
                      Unfollow
                    </span>
                  ) : (
                    <span
                      className="text-primary pointer"
                      onClick={() => handleFollow(user)}
                    >
                      Follow
                    </span>
                  )}
                </div>
              }
              //   description={user.about && user.about}
              description=""
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default People;
