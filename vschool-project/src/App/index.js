import React from 'react';
import {connect}from 'react-redux';
import {Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Results from './pages/Results';
import Lyrics from './pages/Lyrics';



function App(props) {
    return (
        <div>
            <Header>
            <div className="content-wrapper">
                <Route to="./" component={Home}></Route>
                <Route to="./results" component={Results}></Route>
                <Route to="./lyrics" component={Lyrics}></Route>
            </div>
            </Header>
            <Footer/>
        </div>
    )
}



export default App;
