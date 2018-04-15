import React from "react";

function Color(props) {
    console.log(props);
    const { hex } = props;
    return (
        <div className="the-color" style={props.hex}>

        </div>
        
    )
};

export default Color;