import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Form } from "react-bootstrap";

const PostJob = () =>
{
    return(
        <>
        <Header />
        <div className="banner-apply d-flex justify-content-center p-5">
        <button style={{fontSize:"20px", borderRadius:"50px", border:"2px solid #0b5ed7", margin:"100px 0"}}>Start Hiring</button>
        </div>

        <form className="container-md col-8">
          <div className="d-flex">
          <div class="form-group col-md-6">
      <label for="inputCity">Job Title</label>
      <input type="text" class="form-control" id="inputjob" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>1</option>
        <option selected>1</option>
        <option selected>1</option>
        <option selected>1</option>
      </select>
    </div>
          </div>
  
  <div class="form-group col-md-6">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

        <Footer />
        </>
    );
};
export default PostJob;