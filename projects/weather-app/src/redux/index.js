import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';




export function getWeatherData(locationStr) {
    return dispatch => {
        dispatch({
            type: "LOADING_START"
        })


        const openWeatherBaseUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial";
        const openWeatherApiKey = "&APPID=36efdd253e8c7e420cf8fabc76fedcd3&q=";

        const openWeatherUrl = `${openWeatherBaseUrl}${openWeatherApiKey}${locationStr}`;
        console.log(openWeatherUrl);
        axios.get(openWeatherUrl)
            .then(response => {
                // console.log(response.data);
                // const detail = response.data.weather.main;
                // const main = response.data.main;
                dispatch({
                    type: "GET_WEATHER_DATA",
                    response: response.data

                })

            }
            )
    }
}
const initialState = {
    main: {},
    weather: {},
    loading: false
}

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "GET_WEATHER_DATA":
            return {
                ...state,
                main: action.response.main,
                weather: action.response.weather[0].description,
                loading: false
            }
        case "LOADING_START":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store',store.getState()));
export default store;