
import { FETCH_USERS_REQUEST , FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./actions"

const initialState={
    user:[],
    loading:false,
    error:null

}

// now we will pass this vaariable into first parameter
const  userReducer=(state=initialState,action)=>{

    console.log("userReducer action---",action.error)
   
    switch(action.type){

   
        case FETCH_USERS_REQUEST :
            return{

                ...state,
                loading:true,
                error:null,

            }

            case FETCH_USERS_SUCCESS: //suucees case: here loading false beacuse data fetch suceessfully
                return{
    
                    ...state,
                    loading:false,
                    error:null,
                    user:action.userdata

                    // now working fine 
    
                }

                case FETCH_USERS_FAILURE: // error case if any error happen in fetching time than we can set global state or variable liek this
                    return{
        
                        ...state,
                        loading:true,
                        error:action.error,
        
                    }
                    //this default means we function calling but no one case match what should be happen  . they we simply return state as it is
            default:
                return state

            //same like this 




    }




}

export default userReducer;

// now it complete but state parameter take global variables name


// now we can import this function in rootReducer.js file
//lets do