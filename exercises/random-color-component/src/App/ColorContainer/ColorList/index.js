import React from "react";

import Color from "./Color/";

function ColorList(props) {
    const { colors } = props;
    const colorComponents = colors.map((color, i) =>
     <Color key={color.new_color + i} color={props.new_color} />);
    return (
        <div>
            {colorComponents}
        </div>
    )
}

export default ColorList;