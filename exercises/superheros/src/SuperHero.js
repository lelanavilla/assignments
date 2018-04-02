import React from 'react';

function SuperHero(props){
    return(
        <div> 
            <h2 
         onClick={(e)=> 
                props.handleClick(props.superhero)}
             style={{
                fontSize:"50px",
               }} >{props.superhero.name}
                </h2>
           
            
            <img onClick={(e)=> 
                props.handleClick(props.superhero)}
                style ={{
                maxWidth: "450px",
            }} 
                src={props.superhero.img} alt={props.superhero.name}/>
            </div>
    )

}
export default SuperHero;
