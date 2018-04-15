import React from 'react';
import {Switch,Route} from "react-router-dom";
import ResultsList from './ResultsList';
import SongLyrics from './SongLyrics';



function Results(props) {
    return (
        <div>
            <ul>
                <Switch>
                    <Route exact path="/" component= {Home}></Route>
                    <Route exact path="/resultsList" component= {ResultsList}></Route>
                    <Route exact path="/songLyrics" component= {SongLyrics}></Route>
                    </Switch>
                    </ul>
                    </div>
    )
}
export default Results;


            
        </div>
    )
}

export default componentName

