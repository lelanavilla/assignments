import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getBountiesData, removeBounty } from '../redux/reduxBounties';
import {Link} from 'react-router-dom';
// import axios from "axios";
import BountyDetails from './BountyDetails';



class BountyList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs:{
                first_name: "",
                last_name: "",
                bounty_amount: "",
                type:"",
                living:""
            }
        }
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind("this");
        this.handleChange = this.handleChange.bind("this");
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
   
    componentDidMount() {
    this.props.getBountiesData();
    }
  
   
              
    
    render() {
        const bountiesComponent = this.state.bounties.map((bounty, id) => {
            return (
                <div>
                    <Link to={"/bountyDetails/", id}>{bounty.name}</Link>
                </div>
        
    
    
        return (
            <div>
                {bountiesComponent}
            </div>
        )
    }
}
export  default connect(null, {getBountiesData, removeBounty}) (BountyList);