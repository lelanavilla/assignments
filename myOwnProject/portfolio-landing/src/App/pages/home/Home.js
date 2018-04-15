import React from 'react';
import P5Sketch from './P5Sketch';

function Home (props){
    return(
        <div className="home-container">
            <div className="canvas-area">
                <P5Wrapper sketch={P5Sketch}></P5Wrapper>
            </div>
            </div>
    )
}
export default Home;
