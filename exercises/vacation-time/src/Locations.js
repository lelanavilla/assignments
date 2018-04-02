import React from 'react';
import LocationsData from './locations.json';
import Location from './Location';

function Locations(){
    const locationsObj =LocationsData
            .map(locationsObj => 
            <Location>
            key={locationsObj.place} 
            place = {locationsObj.place}
            price= {locationsObj.price}
            timeToGo = {locationsObj.timeToGo}>
            </Location>
            
            )
    return (
        <div>
            {locationsObj}
            </div>
    )
    };
    
    export default Locations;