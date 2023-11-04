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

export const DELETE_BOOKING_REQUIEST="DELETE_BOOKING_REQUIEST"
export const DELETE_BOOKING_SUCCESS="DELETE_BOOKING_SUCCESS"
export const DELETE_BOOKING_FAILURE="DELETE_BOOKING_FAILURE"

export const POST_PAYMENT_REQUIEST="POST_PAYMENT_REQUIEST"
export const POST_PAYMENT_SUCCESS="POST_PAYMENT_SUCCESS"
export const POST_PAYMENT_FAILURE="POST_PAYMENT_FAILURE"

export const GET_PAYMENT_REQUIEST="GET_PAYMENT_REQUIEST"
export const GET_PAYMENT_SUCCESS="GET_PAYMENT_SUCCESS"
export const GET_PAYMENT_FAILURE="GET_PAYMENT_FAILURE"

export const PATCH_BOOKING_REQUIEST="PATCH_BOOKING_REQUIEST"
export const PATCH_BOOKING_SUCCESS="PATCH_BOOKING_SUCCESS"
export const PATCH_BOOKING_FAILURE="PATCH_BOOKING_FAILURE"



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

const deleteBookingRequiest=()=>{
    return({
        type:DELETE_BOOKING_REQUIEST
    })
}
const deleteBookingSuccess=(data)=>{
    return({
        type:DELETE_BOOKING_SUCCESS,
        payload:data
    })
}
const deleteBookingFailure=()=>{
    return({
        type:DELETE_BOOKING_FAILURE
    })
}

const postPaymentRequiest=()=>{
    return({
        type:POST_PAYMENT_REQUIEST
    })
}
const postPaymentSuccess=(data)=>{
    return({
        type:POST_PAYMENT_SUCCESS,
        payload:data
    })
}
const postPaymentFailure=()=>{
    return({
        type:POST_PAYMENT_FAILURE
    })
}
const getPaymentRequiest=()=>{
    return({
        type:GET_PAYMENT_REQUIEST
    })
}
const getPaymentSuccess=(data)=>{
    return({
        type:GET_PAYMENT_SUCCESS,
        payload:data
    })
}
const getPaymentFailure=()=>{
    return({
        type:GET_PAYMENT_FAILURE
    })
}
const patchBookingRequiest=()=>{
    return({
        type:PATCH_BOOKING_REQUIEST
    })
}
const patchBookingSuccess=(data)=>{
    return({
        type:PATCH_BOOKING_SUCCESS,
        payload:data
    })
}
const patchBookingFailure=()=>{
    return({
        type:PATCH_BOOKING_FAILURE
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

export const deleteBooking=(id)=>(dispatch)=>{
    dispatch(deleteBookingRequiest())
    return axios({
        url:`http://localhost:8000/booking/${id}`,
        method:"DELETE"
    })
    .then((res)=>{
        dispatch(deleteBookingSuccess(res.data))
        console.log("Delete.resdata",res.data)
    })
    .catch((error)=>{
        dispatch(deleteBookingFailure())
    })
}

export const postPayment=(data)=>(dispatch)=>{
    dispatch(postPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postPaymentSuccess(res.data))
        console.log("resdata",res.data)
    })
    .catch((error)=>{
        dispatch(postPaymentFailure())
    })
}
export const getPayment=()=>(dispatch)=>{
    dispatch(getPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getPaymentSuccess(res.data))
        console.log("getresdata",res.data)
    })
    .catch((error)=>{
        dispatch(getPaymentFailure())
    })
}

export const patchBooking=(data)=>(dispatch)=>{
    dispatch(patchBookingRequiest())
    return axios({
        url:`http://localhost:8000/data/${data}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchBookingSuccess(res.data))
        console.log("patchresdata",res.data)
    })
    .catch((error)=>{
        dispatch(patchBookingFailure())
    })
}