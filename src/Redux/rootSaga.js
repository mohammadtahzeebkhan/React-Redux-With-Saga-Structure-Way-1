//now let create rootsaga

import { all } from "redux-saga/effects";
// let import our userSaga
import userSaga from "../Components/UserPage/saga";

//root saga also genrator function
 function* rootSaga(){
yield all(

    //here in a array we can add all saga 
    [

        userSaga(),
    ]
)

 }

 export default rootSaga