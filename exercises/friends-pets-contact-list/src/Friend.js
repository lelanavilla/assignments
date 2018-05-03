import React from "react";
import FriendsList from './FriendsList';
import Pets from './Pets';




function Friend(props){
        return(
       <div> 
         
           <h1>Name:{props.person.name}</h1>
           <h3>Age:{props.person.age} </h3>
           <h3>Pets:{props.person.pets}</h3>
           <hr/>
           </div>
    )};
    export default Friend;


           
    
    
    
    