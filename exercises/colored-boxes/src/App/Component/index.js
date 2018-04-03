import React from 'react';
import DisplayComponent from './DisplayComponent';

 
function Component(props){
    const {title, subtitle,info,boxColor} = props;

    const boxComponent = colorBox.map(
        colorBox =>
        <Box key={box.title}
        title={box.title}
        subtitle={box.subtitle}
        info={box.info}
        boxColor= {box.boxColor}/>
    )


    return(

        {boxComponent}
        
       
            
      
           
           )
    };
export default Component;