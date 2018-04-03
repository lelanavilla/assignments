import React from 'react';
import locationsData from './locations.json';
import Card from './Card';

function Locations(props) {
    const locations = locationsData
        .map(locationObj =>
            <Card
                key={locationObj.place}
                img={locationObj.img}
                place={locationObj.place}
                price={locationObj.price}
                timeToGo={locationObj.timeToGo}>
            </Card>

        )
    return (
        <div>
            {locations}
        </div>
    )
};

export default Locations;