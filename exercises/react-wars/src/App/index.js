import React from "react";
// import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/index.js";
// import SideBar from './SideBar';
// import CharactersList from './CharacterList';
// import CharacterDetails from "./CharactersDetails";


function App() {
    return (
        <div>
            <Header />
            <Home></Home>
            <Footer />
        </div>
    )
};


export default App; 