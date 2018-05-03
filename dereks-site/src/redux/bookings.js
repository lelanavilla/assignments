import axios from 'axios';

const initialBookingState = {
    data: [],
    loading: true,
    errMsg: ""
}
const bookingRedcuer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKINGS": {
            return {
                ...state,
                loading: false,
                data: action.bookings
            }
        }
        case "POST_BOOKING":
            return {
                ...state,
                data: [...state.data, action.newBooking],
                loading: false
            }
        default:
            return state;
    }

}
export const getBookings = () => {
    return dispatch => {
        axios.get("/bookings")
        .then (response => {
            dispatch({
                type: "GET_BOOKINGS",
                bookings: response.data
            })
        })
        .catch(err =>{
            dispatch({
                type:"ERR_MSG",
                err:"Photos Unavailable"
            });
        });
    }
}
export function postBooking(newBooking){
    return dispatch =>{
        axios.post("/bookings", newBooking)
        .then(response =>{
            dispatch({
                type:"POST_BOOKING",
                newBooking:response.data
            })
        })
    }
}
export default bookingRedcuer;
