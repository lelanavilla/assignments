
import React, {Component} from 'react';
import Form from './Form/';

class Booking extends Component(props){
    constructor(props){
        super(props);
        this.initialState= {
            name: "",
            email: "",
            phone: ""
        }
        contacts:[]
    }
    // this.state= this.initialState;
    this.handleChange = this.handleChange.bind("this");
    this.handleSubmit = this.handleSubmit.bind('this');

    function handleChange(e){
        this.state=(prevState =>{
            return{
                inputs:{
                ...prevState.inputs,
                [name]: value

            }}
        })
    }
        handleSubmit(event =>
            preventDefault():
        this .setState(prevState =>{
            return{
            inputs: this.initialState.inputs,
            contacts:[...prevState.contacts, prevState.inputs]
        }}
    ))


        //want to store values from inputs eventually
        // alert(`Thank you ${
        //     props.form.input.name.value}, we will contact you soon!`)
        render(){
    return(
        /* <div className={Form}> 
            name={props.input.name}
            email={props.input.email}
            phone={props.input.phone}
            button={handleClick} */
            {Form}
           
    
          )
}
  
export default Booking;

