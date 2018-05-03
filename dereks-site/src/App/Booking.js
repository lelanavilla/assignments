
import React, { Component } from 'react';
import {connect}from 'react-redux';
import {getBookings, postBooking} from "../redux";

export default class Booking extends Component {
    constructor(props){
        super(props);
        this.initialState ={
            inputs:[{
                name:"",
                email:"",
                phone:"",
                message:""
            }]
        }
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind("this");
        this.hanleChange = this.handleChange.bind("this");
    }
    handleChange = e => {
        this.setState({
            inputs: e.target.value
        });
    }
    handleSumbit = e =>{
        const {inputs} = this.props;
        e.preventDefault();
        this.props.postBooking({inputs})
    }

    //somewhere below i need to make the email alert to the owner that there is a new booking entered
    render() {
        const {inputs} = this.props;
        let display;
        if(!inputs.value === 0){
        display =
        <div className="thanks-alert"> 
        Thank you, please allow up to two days for the photographer to 
        return you call. 
    </div> 
    }
    
    }
    return(){
        <div className="booking-page">
            <div className="booking-form-wrapper">
            <h1 className="booking-form-title">Schedule a Booking></h1>
                <form name="booking-form" onSubmit={this.handleSubmit}>
                   <input onChange={this.handleChange} name="name" type="text" placeholder="Full Name"/>
                   <input onChange={this.handleChange} name="email" type="text" placeholder="Email Address"/>
                   <input onChange={this.handleChange} name="phone" type="text" placeholder="Phone Number"/>
                   <input onChange={this.handleChange} name="message" type="text" placeholder="Message"/>

                   <br/>
                   <button> Submit </button>
                   </form>
                    </div>
                    {display}
                    </div>

    }
}
export default connect(state => state, {postBooking})(Booking);
