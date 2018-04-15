import React from 'react';
import Header from './Header';
import Home from './Home/index.js';


function App() {
    return (
        <div className="app-container">
            <Header/>
            <Home artist= {this.inputs.artist.value} song={this.inputs.song.value}/>
        
        </div>
    )
}

export default App;

