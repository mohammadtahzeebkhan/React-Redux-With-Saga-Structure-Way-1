//let make case types

//WE EXPORT this variable and use every ever where we need  , 
export const FETCH_USERS_REQUEST=" FETCH_USERS_REQUEST"
export const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILURE=" FETCH_USERS_FAILURE"


// this is also normal function but this also marge with connect method 
// now they will be part of redux 
// we will call this make program but indirect call by redux
//let make other cases function also


//if we want to send data from these function when we call them and return to saga 
// for these here we have variable to recive data make variable and return 
export const fetchUserRequest=(myurldata)=>{
    console.log("fetchUserRequest myurldata---->",myurldata)
    return{
        type:FETCH_USERS_REQUEST,
        data:myurldata
    }
//let see we are getting this into saga or not 
    
   
}

export const fetchUserSuccess=(userdata)=>{
return{
    type:FETCH_USERS_SUCCESS,
    userdata:userdata
}
}

export const fetchUserFailure=(error)=>{
    return{
    type:FETCH_USERS_FAILURE,
    error:error
    }
}