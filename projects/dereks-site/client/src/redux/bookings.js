import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}
export const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKINGS": {
            return {
                ...state,
                loading: false,
                data: action.bookings
            }
        }
        case "POST_BOOKING": {
            return {
                ...state,
                data: [...state.data, action.newBooking],
                loading: false,
            }
        }
        case "LOADING_START": {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}

export const getBookings =() =>{
    return dispatch =>{
        axios.get('/bookings').then(response =>{
            dispatch({
                type: "GET_BOOKINGS",
                bookings:response.data
            })
        })
        .catch(err => {
            dispatch({
            type: "ERR_MSG",
            err: "Info Unavailable"
        });
    });
    }
}
export function postBooking(newBooking) {
    return dispatch =>{
        axios.post('/bookings', newBooking)
        .then(response =>{
            dispatch({
                type:"POST_BOOKING",
                newBooking: response.data
            })
        })
    }

}

export default bookingsReducer;