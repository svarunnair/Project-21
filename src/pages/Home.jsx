import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchBooking, postBooking, postData } from '../redux/data/action'
import { Box, Button, Grid, InputRightAddon, flexbox, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FlatTree } from 'framer-motion'

function Home() {

  
  const toast = useToast()

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
  const handleClick=(item,id,reserved)=>{
    if(item.reserved===false){
      item.reserved=true
      dispatch(patchBooking(id,reserved))
      dispatch(postBooking(item))
      toast({
        title: 'Boocked.',
        description: "We've booked the seat for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate('/details')
      
    }
    else{
      toast({
        title: 'Already.',
        description: "Already booked seat.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
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
        <Box  >

<table  className='text'>

<tr className='box'>
  <td className='box' onClick={()=>handleClick  (item,item.id,item.reserved)}>{item.seat}</td>
</tr>

</table>

        </Box>
      ))}
      </Grid>
      
      <Button onClick={handleLogout}>Logout</Button>

      

    </Grid>
  )
}

export default Home