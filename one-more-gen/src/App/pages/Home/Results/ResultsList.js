import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const urlToGetArtistOrSongById = (artist_id, track_id) => {
    ``
}
class ResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {
                artist_alias_list_data: []
            }
        }
        componentDidMount(){
            const{artist}= this.state.props;
            const url = "http://api.musixmatch.com/ws/1.1/artist.search?q.artist="
            const pageSize = "&page_size=3";
            const apiKey = "&apikey=e0ce8f51b72f1a24a9b489dc2941f37c";
            axios.get(`${url}${pageSize}${apiKey}`)
        }
    }
    render(){
        if (!urlToGetArtistOrSongById){
            return(
                <p>Loading...</p>
            )
        }
    }
}