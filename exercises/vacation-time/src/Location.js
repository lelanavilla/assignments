import React from 'react';

function Location(props){
    return(
    <div>
      <h2> {props.locations.place}</h2>
      <h3> {props.locations.price}</h3>
      <h4> {props.locations.timeToGo}</h4>
    </div>
    )       
        };

export default Location;