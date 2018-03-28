import React from "react";

function Section(){
    return(

        <section className="zoomIn">
            <h3 className="sideheading">Schedule a Booking</h3>
           <div> 
               <br/>
               <h5>Name:</h5>
           <input type="text" placeholder="Name"/>
    <br/>
      <h5>Email:</h5>
          <input type="text" placeholder="Email Address"/>
         <br/>
          <h5>Contact Number:</h5>
          <input type="text" placeholder="Phone Number"/>
          <span>
              <br/>
              <br/>
          </span>
          <button className="submit" type="submit">Submit</button>
          
          
           </div>
           </section>
    )
}
export default Section;