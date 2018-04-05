import React from 'react';

function Person(props){
    const{name, image} = props;
    return(
        <li>
         <img src={props.img}></img>
            <h1>{props.name}</h1>
            </li>


    )
};
export default Person;
