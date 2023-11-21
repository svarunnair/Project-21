import { Box, Button, Grid } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {

    const navigate=useNavigate()
    const handleEmail=()=>{
        navigate('/signup')
    }

    const handleNumber=()=>{
        navigate('/phone')
    }

  return (
    <Box >WelcomePage
    <Grid   marginTop={200} justifyContent={"center"} display={"center"}>

        <Button color={'green.200'} onClick={handleEmail}>Login With Email Id</Button><br/>
        
        <Button  color={'green.200'} onClick={handleNumber}>Login With Mobile number</Button>
       
        </Grid>
    </Box>
    
  )
}

export default WelcomePage