import React from 'react';

function Form(props){
    return(
        <form 
        name={form.input.name.value}
        email={form.input.email.value}
        phone={form.input.phone.value}
        button={handleEvent}>
  
        <label>Name:</label>
            <input type="text" name="name" placeholder="First Name"/>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Email"/>
            <label>Name:</label>
            <input type="text" name="phone" placeholder="Phone Number"/>
            <button onClick="onClick={(e)=> 
                props.handleClick(props.form.button)}">Schedule An Booking</button>


         </form>   
    )
};
export default Form;