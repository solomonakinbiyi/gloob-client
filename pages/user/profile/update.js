import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../../components/forms/AuthForm";
import { UserContext } from "../../../context";
import { useRouter } from "next/router";
import {LoadingOutlined, CameraOutlined} from '@ant-design/icons'

function ProfileUpdate() {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState({})

  const [uploading, setUploading] = useState(false)

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (state && state.user) {
      // console.log('user from state => ', state.user)
      setUsername(state.user.username);
      setName(state.user.name);
      setAbout(state.user.about);
      setEmail(state.user.email);
      setImage(state.user.image)
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // alert(`${name} ${email} ${password} ${secret}`)
      setLoading(true);
      const { data } = await axios.put(`/profile-update`, {
        username,
        about,
        name,
        email,
        password,
        secret,
        image
      });
      // console.log("updated response => ", data);
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        setState({ ...state, user: data });
        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData);
      // console.log('uploaded image => ', data)
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1>Profile</h1>
        </div>
      </div>
      <div
        className="row py-5"
        style={{
          width: "100%",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="col-md-6 offset-md-3">
          <label className="d-flex justify-content-center h5">
            {image && image.url ? (
              <Avatar size={30} src={image.url} />
            ) : uploading ? (
              <LoadingOutlined className="mt-2" />
            ) : (
              <CameraOutlined className="mt-2" />
            )}
            <input
              type="file"
              name=""
              id=""
              accept="images/*"
              hidden
              onChange={handleImage}
            />
          </label>
          <AuthForm
            profileUpdate={true}
            username={username}
            setUsername={setUsername}
            about={about}
            setAbout={setAbout}
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully udated your profile</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
