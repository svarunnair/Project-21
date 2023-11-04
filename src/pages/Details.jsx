import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { patchBooking } from '../redux/data/action'

function Details() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()


    const handleName=(e)=>{
        let value=e.target.value 
        setName(value)
    }
    const handleAge=(e)=>{
        let value=e.target.value 
        setAge(value)
    }
    const handleGender=(e)=>{
        let value=e.target.value 
        setGender(value)
    }
    const handleFrom=(e)=>{
        let value=e.target.value 
        setFrom(value)
    }
    const handleTo=(e)=>{
        let value=e.target.value 
        setTo(value)
    }

    const handleSubmit=()=>{
        let data={
            name:name,
            age:age,
            catogory:gender,
            start:from,
            end:to
        }
        dispatch(patchBooking(data))
        navigate('/home')

        console.log("data",data)
        }
    




  return (

    <div>Travel details

        <Input onChange={handleName} placeholder='Name'/>
        <Input onChange={handleAge} placeholder='Age'/>
        <Input onChange={handleGender} placeholder='Gender'/>
        <Input onChange={handleFrom} placeholder='From'/>
        <Input onChange={handleTo} placeholder='To'/>
        <Button onClick={handleSubmit}>Submit</Button>
        
    </div>
  )
}

export default Details
