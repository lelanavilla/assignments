import React from 'react';
import Booking from "./Booking";
function Form(props){
    const{name, email, phone}= this.state.inputs;
    
    return(
        <form onSubmit={onSubmit}> 
        {/* <input onChange={onChange} value={name} type="text" name="name" placeholder="Your Name"/>
        <input onChange={onChange} value={email} type="text" name="email" placeholder="Your Email"/>email={form.input.email.value}
        <input onChange={onChange} value={phone} type="text" name="phone" placeholder="Your Number"/>
        <button>Submit</button> */}
  
        <label>Name:</label>
            <input  value={name} type="text" name="name" placeholder="First Name"/>
            <label>Email:</label>
            <input value={email} type="text" name="email" placeholder="Email"/>
            <label>Phone Number:</label>
            <input value={phone} type="text" name="phone" placeholder="Phone Number"/>
            {/* <button onClick="onClick={(e)=> 
                props.handleClick(props.form.button)}">Schedule An Booking</button> */}
            <button> Schedule A Booking</button>

         </form>   
    )
};
export default Form;