import axios from 'axios';
const url = "http://api.musixmatch.com/ws/1.1/artist.search?q_artist="



 
export function handleChange(artist) {
    return {
        type: "HANDLE_CHANGE", 
        inputs: artist
    }
}

export function handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
        return {
            inputs: this.initialState.inputs,
            inquires: [...prevState.inputs]
        }
    }
)
}
    return {
        type: "HANDLE_SUBMIT",
        data: artist
    }


function reducer(state = this.initialState, action) {
    switch (action.type) {
        case "HANDLE_SUBMIT":
            return{
                
            }
    }
        case "HANDLE_CHANGE":
         return
            handleChange = e => { 
                const { value, name } = e.target;
                this.setState(prevState => {
                    return {
                        inputs:
                            {
                                ...prevState.inputs,
                                [name]: value
                            }
                    }
                });
            }
    }
}

//  export function getArtist(){
        // const url = "http://api.musixmatch.com/ws/1.1/artist.search?q_artist=";
        // const apiKey = "&apikey=e0ce8f51b72f1a24a9b489dc2941f37c";
        // const pageSize = "&page_size=3"

    
        
          


    