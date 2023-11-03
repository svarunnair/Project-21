import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postData } from '../redux/data/action'
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
     


  }



  return (
    <div>Home
      <>
      {mainData.map((item)=>(
        <>

<table  className='text'>

<tr className='box'>
  <td className='box' onClick={()=>handleClick(item)}>s10</td>
</tr>

<tr className='box'>

  <td className='box'onClick={()=>handleClick(item)}>s11</td>
  <td className='box'></td>
  <td className='box'onClick={()=>handleClick(item)}>s12</td>
  <td className='box'onClick={()=>handleClick(item)}>s13</td>


</tr>
<tr className='box'>

<td className='box'onClick={()=>handleClick(item)}>s14</td>
<td className='box'></td>
<td className='box'onClick={()=>handleClick(item)}>s15</td>
<td className='box'onClick={()=>handleClick(item)}>s16</td>


</tr>
<tr className='box'>

<td className='box'onClick={()=>handleClick(item)}>s17</td>
<td className='box'></td>
<td className='box'onClick={()=>handleClick(item)}>s18</td>
<td className='box'onClick={()=>handleClick(item)}>s19</td>


</tr>
<tr className='box'>

<td className='box'onClick={()=>handleClick(item)}>s20</td>
<td className='box'></td>
<td className='box'onClick={()=>handleClick(item)}>s21</td>
<td className='box'onClick={()=>handleClick(item)}>s22</td>


</tr>
<tr className='box'>

<td className='box'onClick={()=>handleClick(item)}>s23</td>
<td className='box'></td>
<td className='box'onClick={()=>handleClick(item)}>s24</td>
<td className='box'onClick={()=>handleClick(item)}>s25</td>


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