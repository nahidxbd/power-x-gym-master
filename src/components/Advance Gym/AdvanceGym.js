import React from 'react';
import css from '../Advance Gym/AdvanceGym.css'
import image from '../../images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import checkmark from '../../images/checkmark-square-2.png'

const AdvanceGym = () => {
    return (
     <div className="container">
         <div className="row">
             <div className="col-md-7">
<img src={image} alt="" className="bodyImage"/>
<p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
             
<div class="row">
  <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
      <h6>Having Slimmer Shapely Thighs</h6>
      </div>
      <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
  <h6>Getting Stronger Body</h6>
      </div>
      <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
  <h6>Increased Metabolism</h6>
      </div>
      <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
  <h6>Increased Muscular Endurance</h6>
      </div>
      <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
  <h6>Maximum Results In less Time</h6>
      </div>
      <div class="col-sm-1">
    <img src={checkmark} alt=""/>
      </div>
  <div class="col-sm-11">
  <h6>Firm Hips And Tummy</h6>
      </div>
</div>

             </div>
             <div className="col-md-5">
<h3><span style={{color:' rgb(255, 209, 2'}}>CLASS</span> SCHEDULE</h3>
<div class="row date">
  <div class="col">
      <h5>MONDAY</h5>
      <p>8.00 AM - 9.00 AM</p>
  </div>
  <div class="col">
  <h5>TUESDAY</h5>
  <p>10.00 AM - 11.00 AM</p>
  </div>
  <div class="w-100"></div>
  <div class="col">
  <h5>WEDNESDAY</h5>
  <p>7.00 AM - 8.00 AM</p>
  </div>
  <div class="col">
  <h5>THURSDAY</h5>
  <p>5.00 PM - 6.00 PM</p>
  </div>
  <div class="w-100"></div>
  <div class="col">
  <h5>FRIDAY</h5>
  <p>6.00 AM - 7.00 AM</p>
  </div>
  <div class="col">
  <h5>SATURDAY</h5>
  <p>8.00 AM - 9.00 AM</p>
  </div>
  
</div>

<button type="button" class="btn btn-warning JoinUsButton"><strong>JOIN US</strong></button>

             </div>
         </div>
         
     </div>
     
    );
};

export default AdvanceGym;