import React from "react";

function Color(props) {
    console.log(props);
    const { new_color } = props;
    return (
        <div className="the-color" style={props.new_color}>

        </div>
        
    )
};

export default Color;