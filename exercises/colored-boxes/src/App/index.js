import React from 'react';
import Component from './Component/';
import ".styles.css/";
function App(){

    const box = {

    }
    const data = [
        {},
        {},
        {}
    ]

//  constbox1{
//     title:"This is the Title",
//     subtitle:"subtitle",
//     info:"Lots of info",
//     boxColor:"teal"

// },
// box2:{
//     title:"This is the Title",
//     subtitle:"subtitle",
//     info:"Lots of info",
//     boxColor:"darkMagenta",

// }}]

    return(
    <div>     
         {/* <Component {}></Component> */}
            <Component {...data[0]}></Component>
        
       

            </div>
        )};

export default App;
