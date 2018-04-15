import React, { Component } from 'react'
import Results from './Results';

const urlToGetArtistId = (artist, song) => {
    `https://api.musixmatch.com/ws/1.1/artist.search?page_size=3&apikey=e0ce8f51b72f1a24a9b489dc2941f37c&q_artist=${artist}&q_track
${song}`
}
// https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&quorum_factor=1&page_size=3

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                artist: "",
                song: ""

            }

        }
        this.handleSubmit = this.handleSubmit.bind("this");
        this.handleChange = this.handleChange.bind("this");

    }
    componentDidMount() {
        axios.get(urlToGetArtistId(this.props.artist.value, this.props.song.value))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    artist_id: "",
                    track_id:""
                        
                    }

                })
            })

    }
    // componentDidMount(){
    //     axios.get
}


render() {
    // const{name,value}= this.props.inputs;

return (
    <div className="home-page">
        <div className="artist-input">
            <form onSubmit={handleSubmit} name="search">
                <input onChange={handleChange} type="text" name="artist" id="artist-name" placeholder="Artist Name" />
                <input onChange={handleChange} type="text" name="song" id="song-name" placeholder=" Name of Song" />
                <button>Search</button>
            </form>
        </div>
        <Results/>
    </div>
)
}


export default Home;
