import React from "react";

import Color from "./Color";

function ColorList(props) {
    const { colors } = props;
    const colorComponents = colors.map((color, i) =>
     <Color key={color.hex + i} hexNum={props.hex} />);
    return (
        <div>
            {colorComponents}
        </div>
    )
}

export default ColorList;