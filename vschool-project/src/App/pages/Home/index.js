
import React from 'react';
import {connect}from 'react-redux';
import {handleSubmit, handleChange} from '../../../redux';
import FormDisplay from './FormDisplay';

function Home(props) {
    const {handleSubmit, handleChange, inputs} = this.state;
const{artist, song, lyricsKnown} = this.inputs;
    
    return (
        <div className="home-wrapper">
            <div className="home-page">
    <FormDisplay artist={artist} song={song} lyrics={lyricsKnown}>
        </FormDisplay>
        </div>
                

            
        </div>
    )
}

export default Home;
