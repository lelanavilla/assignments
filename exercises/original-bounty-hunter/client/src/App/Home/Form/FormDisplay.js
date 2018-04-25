import React, {Component} from 'react';
import List from './EditedList/';
import {connect} from 'react-router';

import {postBounty, editBounty, removeBounty} from '../redux/reduxBounties';


class FormDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs:[]
        }
    }
    const {handleChange, handleSubmit, postBounty, editBounty, removeBounty, inputs, bounty} = this.props.bountiesData;
    const {first_name, last_name, type, bounty_amount, living} = inputs;
    return (
        <div>
            <form onSubmit={handleSubmit} name="formDisplay">                                                                                                                                                            
                <input name="first_name" type="text" placeholder="First Name" onChange ={handleChange} value={first_name}/>
                <input name="last_name" type="text" placeholder="Last Name" onChange ={handleChange} value={last_name}/>
                <input name="type" type="text" placeholder="Sith or Jedi" onChange ={handleChange} value={type}/>
                <input name="bounty_amount" type="text" placeholder="Bounty Amount" onChange ={handleChange} value={bounty_amount}/>?π…≥–8/
                <List bounty={editedBounty}></List>
                <button onSubmit={removeBounty}> Delete Bounty</button>

        </form></div>
    )
}
mapStateToProps = state => {
    return(
        state.bouny
)
}

export default connect(mapStateToProps, {addBounty, editBounty, removeBounty}) (FormDisplay);                                                                                                                                = \\\              );
