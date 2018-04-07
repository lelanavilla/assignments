import React, { Component } from "react";
import ColorList from "./ColorList";

import axios from "axios";

const colorApiUrl = "http://www.colr.org/json/color/random";

class ColorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    componentDidMount() {
        axios.get(colorApiUrl + "new_color")
            .then(response => {
                const { results } = response.data;
                this.setState({
                    new_color: results,
                   
                })
            })
           
            
    }
    render() {
        const {new_color} = this.state;
       
            
                return (
                    <ColorList color={new_color}></ColorList>
                )
            }
        }

export default ColorContainer;