import React from 'react';
import{Switch, Route}from "react-router-dom";
import Header from './Header';
// import Footer from './Footer';

import Home from './pages/Home';
import CoverArt from './pages/CoverArt';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import ApiPage from './pages/ApiPage';

function App(props){
    return(
        <div className="app-wrapper">
            <Header></Header>
           
            <div className="content-wrapper">
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route path="/coverArt" component={CoverArt}></Route>
                <Route  path="/portfolio" component={Portfolio}></Route>
                <Route  path="/contact" component={Contact}></Route>
                <Route  path="/booking" component={Booking}></Route>


            </Switch>
        
         
            </div>


        {/* <Footer> </Footer> */}
            </div>
    )
};
export default App;