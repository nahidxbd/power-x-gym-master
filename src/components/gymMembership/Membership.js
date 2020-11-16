import React from 'react';
import css from '../gymMembership/Membership.css'

const Membership = () => {
    return (
      <div className="container">


          <form>
  <div class="row">
    <div class="col-md-6 mt-3">
        <h6>First Name</h6>
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col-md-6 mt-3">
    <h6>Last Name</h6>
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>

    <div class="col-md-6 mt-3">
        <h6>Email</h6>
      <input type="text" class="form-control" placeholder="Your Email"/>
    </div>
    <div class="col-md-6 mt-3">
    <h6>Mobile Number</h6>
      <input type="text" class="form-control" placeholder="Mobile Number"/>
    </div>

<div className="col-md-6 mt-3">
<label for="birthday"><h6>Date Of Birth</h6></label>
<br/>
<input  style={{width:'100%'}} type="date" id="birthday" name="birthday"></input>
    </div>
    <div className="col-md-6 mt-3">
    <label for="inputState"><strong>Gender</strong></label>
      <select id="inputState" class="form-control">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div class="col-md-6 mt-3">
        <h6>Address Line 1</h6>
      <input type="text" class="form-control" placeholder="Address"/>
    </div>
    <div class="col-md-6 mt-3">
    <h6>Country/Region</h6>
      <input type="text" class="form-control" placeholder="Country/Region"/>
    </div>
    <div class="col-md-6 mt-3">
        <h6>City</h6>
      <input type="text" class="form-control" placeholder=""/>
    </div>
    <div class="col-md-6 mt-3">
    <h6>Last Name</h6>
      <input type="Post Code" class="form-control" placeholder=""/>
    </div>
    
  </div>
</form>

<button type="button" class="btn NextButton btn-warning"><strong>NEXT</strong></button>

      </div>
    );
};

export default Membership;