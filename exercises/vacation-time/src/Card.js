import React from 'react';
import LocationsData from './locations.json';
import Locations from './Locations';


function Card(props){
 
    console.log(props);
    const{img,place,price,timeToGo}= props;
   {Locations}
    return(
       <div className="card-container">
           <img src={props.img} className="pics"></img>
           <h2>{props.place}</h2>
           <h3 id="price"><strong>${props.price}</strong></h3>
           <h4>{props.timeToGo}</h4>
           
           
</div>
    )
};  
export default Card;
