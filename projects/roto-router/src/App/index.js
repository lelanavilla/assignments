import React from 'react';

//import router stuff
import{Switch, Route}from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App(props){
    return(
        <div className="app-wrapper">
            <Header><div><img id="logo"src="https://i.imgur.com/3729lnD.png"/></div> </Header>
            <div className="content-wrapper">
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route  exact path="/about" component={About}></Route>
                <Route exact path="/services" component={Services}></Route>
            </Switch>
            </div>

            <Footer> </Footer>
            </div>
    )
};
export default App;