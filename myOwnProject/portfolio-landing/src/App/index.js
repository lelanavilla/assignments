import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/home/Home";
import SecondPage from "./pages/SecondPage.js";
import ThirdPage from './pages/ThirdPage.js';

function App(props){
    return(
        <div className="app-container">
            <Header/>
            <div className="content-wrapper">
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route  exact path="/secondPage" component={SecondPage}></Route>
                <Route exact path="/thirdPage" component={ThirdPage}></Route>
            </Switch>
            </div>
            <Footer/>
            </div>
    )
}
export default App;