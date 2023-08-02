// here we will import combineReducers 
// this is help to combine all Reducers 
//let import 

import userReducer from "../Components/UserPage/reducer";
import { combineReducers } from "redux";


// make a referance of combineReducer inside  we will pass all reducer in a object format
const rootReducer=combineReducers({

    //add reducer here
    //we can set key pair mean when we wants our global state what is name of our reducer that time 

    user:userReducer
})

export default rootReducer;


// this combineReducers help to combine all reducers
// what is Reducers and use 

//A reducer is a pure function in Redux responsible for specifying how the application's 
//state changes in response to dispatched actions. It takes the current state and an action 
//as inputs and returns a new state based on the action type. The state returned by the reducer
// should be immutable, meaning it should not modify the original state but create a new state
//object reflecting the updated data.