import { createStore, combineReducers } from "redux"
import artist from "./artist";
store.subscribe(() => {
    console.log(store.getState());
})
export default createStore(handleSubmit, handleChange);