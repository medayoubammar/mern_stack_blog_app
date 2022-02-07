import {Link} from "react-router-dom";

import "./Posts.css";
export default function Posts()
{
    return(
        <div className="card post-pic m-3"  >
        <img src="post.png" className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">Post</h5>
          <p className="card-text"> content.</p>
          <Link to="/posts/:postId" href="#" className="btn">Go somewhere</Link>
        </div>
      </div>
    )
}