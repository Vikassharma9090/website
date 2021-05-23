import React, { useState } from "react";



const Contact=()=>{
    const[data,setData]=useState({
        fullname: "",
        email: "",
        phone:"",
        msg:"",
    });

    const InputEvent=(event)=>{
         const{name,value}=event.target;

         setData((preVal)=>{
             return{
                 ...preVal,
                 [name]:value,
             };
         });
    };

    const formSubmit= (e) =>{
        e.preventDefault();
        alert(`${data.fullname}`);
        alert("Hii,I am vikas");
        
    };
    return(
        <>
            <div className="my-5">
           <h1 className="text-center text-capitalize">Contact Us</h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <from onSubmit={formSubmit}>
                       <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
                       <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input 
  name="email"
  value={data.email}
  onChange={InputEvent}
  type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Address"/>
</div>
                       <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone No </label>
  <input 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
  <textarea 
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit" >Submit form</button>
  </div>
                       </from>
                   </div>
               </div>
           </div>
            
        </>
    );
};
export default Contact;