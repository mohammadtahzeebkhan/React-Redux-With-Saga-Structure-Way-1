// now we will make saga for userPage component 
// we can make a single saga for all component but 
// let try this one strcture 
//let do

// here we make genrator funcation \
//please attention on start

// call not coming mean we need to install redux-saga/effects
// this is normal function which call by saga 
// this asyn call so add asyn 
import {  call,put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUserFailure, fetchUserSuccess } from './actions';
import axios from 'axios';


// now this time staticaly api hitting i want to pass  different url
//let see how 

//let see here we are getting or not
const callApi=async(mydata)=>{
console.log("callApi",mydata.data)

    const url=`https://jsonplaceholder.typicode.com/users${mydata.data.url}`
    try{
const response=await axios({
method:mydata.data.method,
url:url,

//we will see later how to pass data or payload and header
//data
//header


})

return response;
    }

catch(error){
throw error;



    }

}


// how this function call 
// this function call by saga takeLatest function


/// api hit but data not store in global store saga action and reducer action also work u can see
function* fetchUserSaga(action){
// yes we are getting
//now pass this data to apiCall function 
//call first argument is function and secound argument is functions parameters ok

console.log('fetchUserSaga myurl',action)
    try{

const response=yield call(callApi,action)
// let also pass data from handleResponse function also 
console.log('fetchUserSaga response',response)


yield put(fetchUserSuccess(response))
// put(action): argument action is undefined" this comes from below line 
// i have find solution 
//why  happening explore after this  video
// this code is github bye allah hafiz
action.data.handleResponse(response)

    }
    catch(error){
        console.log('fetchUserSaga error',error.message)
        yield put (fetchUserFailure(error.message))



    }
}

//fetchUserSaga this function call by below function which also genrator function

function* userSaga(){


//lets understand what happen here 
// when action creator function call they will return type and data or payload 
// that time takeLatest watch type of action creator if they match
//like below they they will means takeLatest call secound argument , mean fetchUserSaga

    yield takeLatest(FETCH_USERS_REQUEST,fetchUserSaga)
}
//now we will export this userSaga
//and add into rootSaga
export default userSaga