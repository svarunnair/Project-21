import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postBooking, postData } from '../redux/data/action'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

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

    <div>Home
      <Button onClick={handleBooking}>Booking history</Button>
      <>
      {mainData.map((item)=>(
        <>

<table  className='text'>

<tr className='box'>
  <td className='box' onClick={()=>handleClick(item)}>s10</td>
</tr>

</table>
        
      
        </>
      ))}
      </>
      
      <Button onClick={handleLogout}>Logout</Button>

      
      



    </div>
  )
}

export default Home