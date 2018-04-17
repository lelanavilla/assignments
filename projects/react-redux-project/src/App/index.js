import React from 'react'
import Header from './Header';
import { Switch, Route } from "react-router-dom";
import Weather from './Weather';
import About from './About';
function App() {
    return (
        <div className="app-page">
           <Header/>
           <div className="content-wrapper">
                <Switch>
                 <Route path="/about/" component={About}></Route>
                    {/* <Route path="/contact" component={Contact}></Route> */}
                </Switch>
            </div>
               <Weather/>
            </div>
    )
}

export default App;
