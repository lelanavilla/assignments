import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../redux';
// import {comments} from '../redux/Sayings';
// import {Link} from 'react-router-dom';
import Sayings from "./Sayings.js";


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        }
        this.handleSubmit = this.handleSubmit.bind('this');
        this.handleChange = this.handleChange.bind('this');
    }
    //this is where the new state is now the value the user entered!!
    handleChange = e => {
        this.setState({
            location: e.target.value
        });

    }
    //THIS IS WHERE THE VALUE OF THE USERS INPUT IS SET WHEN THE FORM IS SUBMITTED
    handleSubmit = e => {
        e.preventDefault();
        this.props.getWeatherData(this.state.location);
    }

    render() {
        console.log("props", this.props);
        const { temp, temp_min, temp_max } = this.props.main;
        const description= this.props.weather;
        let display;
        if (this.props.loading) {
            display = <h2>Just a little bit longer</h2>
        } else if (temp) {
            display = <div className="results-displayed">
                <div className="small-temp">
                    <h1>Current Temperature:</h1></div>
                  <div className="subtitle-line"> 
                       <h3 id="description">{description}</h3>
                         <h4 id="hi-low-temps">High_{temp_min}/Low_{temp_max}</h4>
                         </div>
                <h2 className="big-number" id="temp-number">{temp}</h2>
               
                <div className="sayings"><Sayings temp={temp}></Sayings></div>
                
                {/* <h5 id="humidity">{humidity}</h5> */}
            </div>
        } else {
            display = null;
        }



        return (
            <div className="weather-area">
                <div className="image">
                    <div className='form-wrapper'>
                        <form id="actual-form" onSubmit={this.handleSubmit}>
                            <h4 className="form-title"> Enter Your City:</h4>
                            <br />
                            <input onChange={this.handleChange}
                                type="text"
                                name="location"
                                value={this.state.location}
                                placeholder="Location"
                            />
                            <br />
                            <button>GO</button>
                        </form>
                        {/* <div className="buttons">
     <div class="headshot img-1"></div>
     <div class="headshot img-2"></div>
     </div> */}

                        {/* <Link to="/unusualPlaces" <div className="random-cool-places"> */}
                        {/* <button id="cool-places">Enter */}
                    </div>

                </div>
                {display}
            </div>
        )
    }
}
export default connect(state => state, { getWeatherData })(Weather);
