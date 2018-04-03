import React from 'react';
import Component from './Component/';
import ".styles.css/";
function App(props){
    const box = boxComponent;

const {title,subtitle,info, boxColor}= props;
    const coloredBox = [
        {
             title:"This is the Title",
             subtitle:"subtitle",
             info:"Lots of info",
             boxColor:"teal"
            
            },
        {
            title:"This is the Title",
            subtitle:"subtitle",
            info:"Lots of info",
            boxColor:"darkMagenta",
         }
         ] 


    return(
    <div>     
         {/* <Component {}></Component> */}
            <Component {...Box}></Component>
        
       

            </div>
        )};

export default App;
