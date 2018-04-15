import React, { Component } from 'react'
import FormDisplay from './FormDisplay';                                             mii

class Form extends Component {
   constructor(props){
       super(props);
       this.initialState={
           inputs:{
                artist:"",
                song:"",
                songLyrics:""
           }
           
       }
       this.handleChange= this.handleChange.bind("this");
           this.handleSubmit = this.handleSubmit.bind("this");
   }
    render() {
        const{handleChange, handleSubmit, inputs} = this.state;
        const{artist, song, songLyrics} = this.inputs;
        return (
            <div>
                <FormDisplay/>
            </div>
        )
    }
}
export default Form;
