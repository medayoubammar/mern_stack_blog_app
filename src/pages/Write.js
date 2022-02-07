
export default function Write()
{
    return(
        <div className="container mt-3 mb-5">
            <img src="blog.jpg" className="mb-3 img-fluid rounded" />
     <form>
     <div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02" />
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Blog Title</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-floating">
  <textarea className="form-control pb-5 mb-2" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}