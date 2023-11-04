import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postBooking, postData } from '../redux/data/action'
import { Button, Grid, InputRightAddon, flexbox } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FlatTree } from 'framer-motion'

function Home() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const mainData=useSelector((store)=>store.data.data)

  console.log("mainData",mainData)

useEffect(()=>{
     dispatch(getData())
},[])
  


  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('signin')
  }
  const handleClick=(item)=>{
    if(item.reserved===false){
      dispatch(postBooking(item))
      alert('Booked')
      navigate('/booking')
      
    }
    else{
      alert('Seat is already booked')
    }
    
  }

  const handleBooking=()=>{
    navigate('/booking')
  }


  return (

    <Grid>Select you seat
      <Button left={550} onClick={handleBooking}>Booking history</Button>
      <Grid gridTemplateColumns={"repeat(3,1fr)"}>
      {mainData.map((item)=>(
        <>

<table  className='text'>

<tr className='box'>
  <td className='box' onClick={()=>handleClick(item)}>{item.seat}</td>
</tr>

</table>
        
      
        </>
      ))}
      </Grid>
      
      <Button onClick={handleLogout}>Logout</Button>

      
      



    </Grid>
  )
}

export default Home