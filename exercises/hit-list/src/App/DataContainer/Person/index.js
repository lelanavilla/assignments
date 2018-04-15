import React from 'react';

function Person(props){
    const{name, image} = props;
    return(
        <li>
            <div className="img-container">
         <img src={image} alt='' className="img"/>
            <h1>{name}</h1>
            </div>
            </li>


    )
};
export default Person;