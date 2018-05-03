import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postBooking} from '../redux/bookings.js';


class BookingForm extends Component{
constructor(props){
    super(props);
    this.initialState={
      inputs:{  
            name:"",
            email:"",
            phone:"",
            message:""

      },
      loading:true,
      errMsg:""
        }
    this.state= this.initialState;
    this.handleChange= this.handleChange.bind("this");
    this.handleSubmit= this.handleSubmit.bind("this");
}
handleChange = e =>{
  this.setState({
    inputs: e.target.value
  });
}
handleSubmit = e => {
  e.preventDefault();
  this.props= (this.state.value);
}
componentDidMount(){
  this.props.postBooking();
}
render(){
// const{name, email, phone, message}= this.props.inputs;
  // const name = this.props.inputs.name;
  // const email = this.props.email;
  // const phone = this.props.phone;
  // const message = this.props.message;
let display;
if (this.props.loading){
  display= <h2>Your request is being sent</h2>
}else{
  // display= <div className="confirmation">
  //   <div className="confirmation-box">
  //     <h2>Your request has been received.</h2>
  //     <p className="confirmation-words">Someone will be in touch, shortly.Thank you</p>
  //     </div>
      
}

  return(

<div className="booking-page">
  <div className="container">
  <div id="contact_header">
    <h3>Contact Us to Schedule a Booking</h3>
  <br/>
    <div id="contact_form">
    
      <form name="booking-form"action="POST_BOOKING" method="post" onSubmit={this.handleSubmit}> 
      <fieldset>
          <div className="form-input" >
          <input onChange={this.handleChange}type="text" name="name" id="name" placeholder="Name" required />
            </div>
          <div>
           
            <input onChange={this.handleChange} type="text" name="email" id="email" placeholder="Email"/>
            </div>
          <div>
            <input onChange={this.handleChange} placeholder="Best Number to Reach You" type="text" name="phone" id="phone" />
          </div>
          <div>
  
            <textarea onChange={this.handleChange} placeholder="Message" type="text" name="comment" id="comment" className="required" ></textarea>
          </div>
         <div> 
           <button> Submit</button>
          </div>
       </fieldset>
      </form>
    </div>
  </div>
  </div>
  {display}
  </div>
  )
}
}
const mapStateToProps = state =>{
 return state.bookings;


  }

export default connect(mapStateToProps, {postBooking})(BookingForm)
