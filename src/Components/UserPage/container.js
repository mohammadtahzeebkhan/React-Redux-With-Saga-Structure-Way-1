// here i create container in this conatiner i will 
// code only data menupulation things 
// like api fetch and all

import { connect } from "react-redux";
import { fetchUserRequest } from "./actions";
import { useEffect } from "react";

// now i want to use redux action call here 
const  UserContainer=(props)=>{
console.log("UserContainer props",props)

const handleResponse=(res)=>{
 console.log("handleResponse",res)
}

const handleError=(error)=>{
    console.log("handleError",error)
   }

useEffect(()=>{

//i make object i want pass to this function as single object

// now let error handling function and response handling function


props.fetchUserRequest(
        
        {
       url:"/10",
       method:"GET",
       handleError,
       handleResponse

    })
},[])

// let see this function we are getting in action creator or not


//now call saga 

    console.log("UserContainer props",props)
    return(<>
    
    <h1>hello i m user container.js</h1>
    </>)
}

//for this i want use connect method 
// we will export our Usercontainer.js with wrap of connect method
//connect method take two function 
// name of these function anything 
// but first function props give state or we can say global state or variable and retrun to UserContainer
// as props
// and function return mehtod of action creator

const mapStateToProps=(props)=>{

   return( props)

}

// i just change name nothing

/// this fun add our action creator function

//now we can call our action now maybe u get how action creator call saga and reducer

//issue is here 
const mapDispatchToProps={

    fetchUserRequest

}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);
