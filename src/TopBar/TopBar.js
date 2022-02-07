import {Link} from "react-router-dom";

export default function TopBar(){
    return (
     
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" href="#">My Blogs</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active" to="/" > Home </Link>
        </li>
       
        <li className="nav-item">
         <Link className="nav-link active" to="/Write" > WriteBlogs </Link>
        </li>
        
        
      </ul>
      <form className="d-flex">
      <a className="navbar-brand" href="#">
      <img src="user.png" alt="" width="35" height="35" />
    </a>
        
      </form>
    </div>
  </div>
</nav>
      
    )
}