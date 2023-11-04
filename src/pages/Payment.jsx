import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getPayment } from '../redux/data/action'

function Payment() {

    const payment=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()

    console.log("payment",payment)

    useEffect(()=>{
        dispatch(getPayment())
    },[])


  return (
    <div>Payment
        <>
      

        {payment.map((item)=>(
            <>
            {item.name}
            </>
        ))}

</>
    </div>
  )
}

export default Payment