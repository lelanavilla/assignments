import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-router';
import {postBounty, editBounty, removeBounty} from '../redux/reduxBounties';

class BountyDetails extends Component {
constructor(props){
    super(props);
    this.state ={
        bounty:{}
    };
    this.state= this.intitialState;
this.handleChange= this.handleChange.bind('this');
this.handleSubmit = this.handleSubmit.bind("this");
}
handleChange (event) {
    const{ value,name} = event.target;
    this.setState (prevState => {
        return{
            inputs:{
                ...prevState.inputs,
                [name] : value
            }
        }
    })
}
    
handleSubmit (e){
    e.preventDefault();
    return{
        inputs: this.initialState.inputs,
        bounties: [...prevState.bounties, prevState.inputs]

}
}
componentDidMount(newBounty) {
 this.props.addBounty();
    newBounty;
    }
        
  
    render(){
        const{ handleSubmit, handleChange,first_name, last_name, bounty_amount, type, living,}= this.props.state.bounty;
<div className="bounty-display">
           <li>
               <h3>{first_name}</h3>
               <h3>{last_name}</h3>
               <h4>{type}</h4>
               <h2>{bounty_amount}</h2>
               <h1>{living}</h1>
               </li>

            
        </div>
        return(

            <div className = "form-area">
                <form  onSubmit={handleSubmit}className="form">
                    <input onChange={handleChange}type="text" placeholder="First Name" name="first_name"/>
                    <input onChange={handleChange}type="text" placeholder="Last Name" name="last_name"/>                    <input onChange={handleChange}type="text" placeholder="First Name" name="first_name"/>
                    <input onChange={handleChange}type="text" placeholder="Jedi or Sith?" name="type"/>
                    <input onChange={handleChange}type="text" placeholder="Bounty Amount" name="bounty_amount"/>
                    <input onChange={handleChange} type="text" placeholder="Dead or Alive" name="living"/>
                    <button>Edit</button>
               </form>
                </div>
        )
    }
}

    



export default  connect(null, {addBounty, editBounty, removeBounty}) (BountyDetails);
