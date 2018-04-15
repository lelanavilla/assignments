import React, {Component} from "react";
import axios from "axios";

class PersonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           //the array thats being populated i believe
           //should have the key value pairs from the apis json
           //file, but its not working so Im unsure in I need to 
           //include the keys with empty strings as props
           //on the state here--- in theory
           //I should be able to just set the props on 
           //the state as an empty array
            person:{}
            //  {
            //     name:"",
            //     height:"",
            //     mass:"",
            //     hair_color:"",
            //     skin_color:"",
            //     eye_color:"",
            //     birth_year:""
            // }
        };
    }

    componentDidMount() {
        const id = this.props.match.params.personId;
        axios.get(`https://swapi.co/api/people/${id}`)
            .then(response => {
                this.setState({
                    person: response.data
                })
            });
    }
    //unsure if the personId will be created or I shouldve 
    //included an personId = ""in the states props


    // also unsure if I need to include all the names
    //of the keys I want from the json file inside the { } 
    //when Im deconstructing the states props if im setting
    //the states props to an empty array -- im 
    //unsure how it will know if i put just "person" inside
    //the const { } = this.state.props;
    //I feel like I should be adding the values i want here
    //because I should know what values i want from the initial
    //get request
    render() {
        const {name, height, eye_color, hair_color,
        mass,skin_color, birth_year } = this.state.person;
        return (
            //in theory i should be able to use
            //the spread operator to grab all the props
            //from the person with ??{this.state...person}??
            //or maybe just {...person}???
            //if im ???right??? I should be able to remove "this.state"
            //from each jsx below
     <div className="li-container">

            
            <li>
                <h1 className="person-name">{name}</h1>
                <h3>{height}</h3>
                <h3>{mass}</h3>
                <h3>{hair_color}</h3>
                <h3>{skin_color}</h3>                
                <h3>{eye_color}</h3>
                <h3>{birth_year}</h3>
            </li>
     </div>
        )
    }

}

export default PersonDetails;
