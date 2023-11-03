import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


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