import axios from "axios";

const initialPhotosState ={
    data: [],
    loading:true,
    errMsg:""
}
const photosReducer = (state = inititalState, action)=>{
switch (action.type){
    case "GET_PHOTOS":{
        return{
            ...state,
            loading:false,
            data:action.photos
        }
    }
    case "POST_PHOTO":{
        return{
            ...state,
            data:[...state, action.newPhoto],
            loading:false
        }
    }
        case "REMOVE_PHOTO":
        return{
            ...state,
            data:state.data.filter(photo => photo._id !== action.id),
            loading:false
        }
    case "LOADING_START":
    return{
        ...state,
        loading: true
    }
    default:
    return state;
    }
}
export const getPhotos =() => {
    return dispatch => {
        axios.get('/photos')
        .then(response =>{
            dispatch ({
                type: "GET_PHOTOS",
                photos: resposne.data
            })
        })
        .catch(err => {
            dispatch ({
                type:"ERR_MSG",
                err: "Photos Unavailable"
            })
        })
    }
}
export function postPhoto(newPhoto){
    return dispatch =>{
        axios.post('/photos', newPhoto)
        .then(response => {
            dispatch({
                type:"POST_PHOTO",
                newPhoto: response.data,
            })
        })
    }
}
export function removePhoto(id){
    return dispatch =>{
        axios.delete('/photos/' + id)
        .then(response =>{
            dispatch({
                type: "REMOVE_PHOTO",
                id
            })
        })
    }

}

export default photosReducer;