import { POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./actionAuth"



const initState={
    isError:false,
    isLoading:false,
    signup:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    signup:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    default:
                        return({
                            ...state
                        })
    }
}