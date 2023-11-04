import { DELETE_BOOKING_FAILURE, DELETE_BOOKING_REQUIEST, DELETE_BOOKING_SUCCESS, GET_BOOKING_FAILURE, GET_BOOKING_REQUIEST, GET_BOOKING_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, POST_BOOKING_FAILURE, POST_BOOKING_REQUIEST, POST_BOOKING_SUCCESS } from "./action"



const initState={
    isError:false,
    isLoading:false,
    data:[],
    postBooking:[],
    getBooking:[],
    deleteBooking:[]
}

export const reducerData=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_BOOKING_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_BOOKING_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postBooking:action.payload
                })
                case POST_BOOKING_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case GET_BOOKING_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_BOOKING_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getBooking:action.payload
                })
                case GET_BOOKING_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case DELETE_BOOKING_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case DELETE_BOOKING_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    deleteBooking:action.payload
                })
                case DELETE_BOOKING_FAILURE:
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