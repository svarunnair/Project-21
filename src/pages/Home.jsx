import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchBooking, postBooking, postData } from '../redux/data/action'
import { Box, Button, Grid, InputRightAddon, Text, flexbox, useToast } from '@chakra-ui/react'
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
    
    navigate('/signin')
  }
  const handleClick=(item,id,reserved)=>{
    if(item.reserved===false){
      
      toast({
        title: 'Boocked.',
        description: "We've booked the seat for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate(`/details/${id}`)
      
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

    

    <Grid justifyContent={'center'}  >Select your seat
    
    
      <Button left={700}width={130} onClick={handleBooking}>Booking history</Button>

      <Grid width={'400px'}  gridTemplateColumns={"repeat(3,1fr)"}>
     
     <Grid gap="5px" gridTemplateColumns={"repeat(4,1fr)"} >

             {mainData.map((item, index) => (
               <Box
               onClick={()=>handleClick  (item,item.id)}
                 key={index}
                 w="50px" 
                 h="50px" 
                 backgroundColor={item.reserved?"red":"green"}
                 marginRight={index === 0 ? '100px' : 0}
               >
                  <Text paddingTop={'12px'}>{item.seat}</Text>
               </Box>
             ))}
           </Grid>


           </Grid>

           <Button onClick={handleLogout}>Logout</Button>

      

    </Grid>
  )
}

export default Home