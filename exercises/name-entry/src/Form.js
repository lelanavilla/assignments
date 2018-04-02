import React, {Component} from 'react';


class Form extends Component{ 
    constructor(props){
    super(props);

this.initialState ={
    input: {
        fullName: ""
        
    },
    names:[]
}

//
this.state=this.initialState;
this.handleChange =this.handleChange.bind(this);
this.handleSubmit =this.handleSubmit.bind(this);
}


//value of inputs goes in state
//     //this is where static properties go
// };
handleChange(e){
  const {value,name} = e.target; 
  //below the prevState is coming from the super class
  //youre basically saying set the previous state input fields
  //to remain the same unless their is a change in the input
  //since thats set the [name] which refers to the inputs 
  //since we gave them all a name prop it will refer to all the inputs 
  //with a name prop it will grab the inputs that have a "change" on the value
  this.setState(prevState => {
    return{

        //r4eset the forms back to the originals state and include the new object in the array
          input:{
              ...prevState.input,[name]:value
            
      }
  }
      

handleSubmit(e => {
    preventDefault();
this.setState(prevState =>{
    return{
    input: this.initialState.input,
    names:[...prevState.names, prevState.input]
    }})})

    render() = {
    const {fullName} = this.state.input;
    return(
    
    <form> 
        <input name="fullName" autoComplete="given-name"onChange= {this.handleChange} value={firstName} type="text" placeholder="Enter First Name"/>
        <button>Submit</button>
       
        </form>
    

})}};
export default Form;
