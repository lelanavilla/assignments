import React from 'react';
// import {Switch, Route} from "react-router-dom";
import SideBar from './SideBar/';
// import CharactersList from "./CharactersList";
// import CharacterDetails from "./CharacterDetails";

function Home(props) {
    //I think I might need to deconstruct the 
    //Characters object here 
    //like 
    //const {Characters}= this.state.props;
    //Im unsure though.
    return (

        <div className='main-container'>
            <div className='not-sidebar'></div>
           <div className="sidebar">
                <SideBar/>
                </div>
        </div>


    )
}
export default Home;
