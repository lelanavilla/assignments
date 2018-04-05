import React from 'react';

//import router stuff
import{Switch, Route}from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

function App(props){
    return(
        <div className="app-wrapper">
            <Header> </Header>
            <div className="content-wrapper">
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route  exact path="/about" component={About}></Route>
                <Route exact path="/services" component={Services}></Route>
                <Route  path="/services/:serviceId" component={ServicesDetails}></Route>
            </Switch>
            </div>

            <Footer/>
            </div>
    )
};
export default App;
