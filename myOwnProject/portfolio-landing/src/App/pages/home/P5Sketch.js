import React, {Component} from "react";
import P5Wrapper from 'react-p5-wrapper';
 
 class P5Sketch extends Component(props){
     constructor(props){
         super(props);
         this.initialState={
             input:{
                 location:""
             }
             

         }
     }
     return(
<P5Wrapper sketch={sketch} />
     )
 }