import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function SinglePost(){
  const location = useLocation();
  const title = location.pathname.split("/")[2];
  console.log("ID : => ",title);
  const [post, setPost] = useState({});
 

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + title)
      setPost(res.data);
      
     
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`);
      window.location.replace("/");
    } catch (err) {}
  };
    return(
        <>
      <div className="card mb-3">

  <div className="card-body">
    <h5 className="card-title h1 text-center">{ post && post.title}</h5>
    <p className="card-text">{post && post.desc}</p>
    <p className="card-text text-end"><small className="text-muted">Last updated 3 mins ago</small></p>
    <div className="d-flex justify-content-end">
<button onClick={handleDelete} className="btn">Delete</button>
    </div>
    <img src={post && post.photo} className="card-img-top" alt="..." />
  </div>
</div>

        </>
    )
}