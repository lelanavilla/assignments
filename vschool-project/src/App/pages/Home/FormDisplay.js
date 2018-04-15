import React from 'react'
import {connect} from 'react-redux';
import {handleSubmit, handleChange} from '../../../redux';
import Form from './pages/Home/Form';

function FormDisplay(props) {
    const { handleChange, handleSubmit,inputs}= this.state;
    const{ artist, song, songLyrics} = inputs;
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
             <h4>Artist:</h4>
             <input onChange={handleChange} value={artist} name="artist" type="text" id="artist-name"/>
             <h4>Song:</h4>
             <input onChange={handleChange} value={song} name="song" type="text" id="song-title"/>
             <h4>Song Lyrics:</h4>
             <input onChange={handleChange} value={songLyrics} name="song-lyrics" type="text" id="song-lyrics"/>
            <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default FormDisplay;
