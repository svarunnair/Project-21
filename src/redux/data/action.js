import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const POST_BOOKING_REQUIEST="POST_BOOKING_REQUIEST"
export const POST_BOOKING_SUCCESS="POST_BOOKING_SUCCESS"
export const POST_BOOKING_FAILURE="POST_BOOKING_FAILURE"

export const GET_BOOKING_REQUIEST="GET_BOOKING_REQUIEST"
export const GET_BOOKING_SUCCESS="GET_BOOKING_SUCCESS"
export const GET_BOOKING_FAILURE="GET_BOOKING_FAILURE"


const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const postBookingRequiest=()=>{
    return({
        type:POST_BOOKING_REQUIEST
    })
}
const postBookingSuccess=(data)=>{
    return({
        type:POST_BOOKING_SUCCESS,
        payload:data
    })
}
const postBookingFailure=()=>{
    return({
        type:POST_BOOKING_FAILURE
    })
}

const getBookingRequiest=()=>{
    return({
        type:GET_BOOKING_REQUIEST
    })
}
const getBookingSuccess=(data)=>{
    return({
        type:GET_BOOKING_SUCCESS,
        payload:data
    })
}
const getBookingFailure=()=>{
    return({
        type:GET_BOOKING_FAILURE
    })
}


export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("resdata",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })
}

export const postBooking=(data)=>(dispatch)=>{
    dispatch(postBookingRequiest())
    return axios({
        url:"http://localhost:8000/booking",
        method:"POST",
        data

    })
    .then((res)=>{
        dispatch(postBookingSuccess(res.data))
        console.log("postBookingdata",res.data)
    })
    .catch((error)=>{
        dispatch(postBookingFailure())
    })
}

export const getBooking=(data)=>(dispatch)=>{
    dispatch(getBookingRequiest())
    return axios({
        url:"http://localhost:8000/booking",
        method:"GET",
        data

    })
    .then((res)=>{
        dispatch(getBookingSuccess(res.data))
        console.log("getBookingdata",res.data)
    })
    .catch((error)=>{
        dispatch(getBookingFailure())
    })
}