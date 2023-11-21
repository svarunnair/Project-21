import { Button, Grid, Input } from '@chakra-ui/react'
import { PhoneAuthProvider, RecaptchaVerifier, 
  signInWithCredential, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
// import PhoneInput from 'react-phone-number-input'
import { auth } from './firebase'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Phone() {

  const [phone,setPhone]=useState('')
  const [confirmationResult,setConfirmationResult]=useState(null)
  const [otp,setOtp]=useState('')

  const handleSend=async()=>{

    try{
      const recaptcha= new RecaptchaVerifier(auth,"recaptcha",{})
      const confirmation=await signInWithPhoneNumber(auth,phone,recaptcha)
      setConfirmationResult(confirmation)
      console.log("confirmation",confirmation)
    }
   catch(err){
    console.error(err)
   }
  }

  console.log("confirmationResult",confirmationResult)

  const handleInput=(e)=>{

    let value=e.target.value 
    setOtp(value)
  }

  const handleVerify=async()=>{
    try{
      const credential=PhoneAuthProvider.credential(confirmationResult.verificationId,otp)
      await signInWithCredential(auth,credential)
      console.log("user is Signed in",credential,auth)
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <div>
      Sign up with mobile number
      <Grid>
        <PhoneInput
        country={"ind"}
        value={phone}
        onChange={(phone)=>setPhone('+'+ phone)}
        />
      </Grid>
      <Button onClick={handleSend}>Send OTP</Button><br/>
      <div id='recaptcha'></div>
      <Input onChange={handleInput} placeholder='enter OTP'/><br/>
      <Button onClick={handleVerify}>Verify</Button>
    </div>
  )
}

export default Phone