import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import axios from 'axios'
import PostForm from '../../../components/forms/PostForm'
import UserRoute from '../../../components/routes/UserRoute'
import { toast } from 'react-toastify'
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";


const EditPost = () => {
    const [post, setPost] = useState({})

    // state
     const [content, setContent] = useState("");
     const [image, setImage] = useState({});
     const [uploading, setUploading] = useState(false);

    const router = useRouter()
    // console.log('router', router);
    const _id = router.query._id;

    useEffect(() => {
        if(_id) fetchPost()
    }, [_id])

    const fetchPost = async () => {
        try{
            const {data} = await axios.get(`/user-post${_id}`)
            setPost(data)
            setContent(data.content)
            setImage(data.image)
        }catch(err){
            console.log(err)
        }
    }

    const postSubmit = async (e) => {
        e.preventDefault()
        // console.log('SUbmit post to update', content, image);
        try {
            const {data} = await axios.put(`/update-post/${_id}`, {content, image})
            if(data.error){
                toast.error(data.error)
            }else{
                toast.success('Post updated')
                router.push('/user/dashboard')
            }
        } catch (err) {
            console.log(err)
        }
    }

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
      <UserRoute>
        <div className="container-fluid">
          <div className="row py-5 bg-default-image text-light">
            <div className="col text-center">
              <h1>News feed</h1>
            </div>
          </div>
        </div>
        <div
          className="row p-3"
          style={{
            width: "100%",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
          </div>
        </div>
        <Link href="/user/dashboard">
          <a className="d-flex justify-content-center p-5">
            <RollbackOutlined />
          </a>
        </Link>
      </UserRoute>
    );
}

export default EditPost;