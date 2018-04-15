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
        axios.get(colorApiUrl + "random")
            .then(response => {
                const { results } = response.data;
                this.setState({
                    hex: results,
                   
                })
            })
           
            
    }
    render() {
        const {hex} = this.state;
       
            
                return (
                    <ColorList color={hex}></ColorList>
                )
            }
        }

export default ColorContainer;