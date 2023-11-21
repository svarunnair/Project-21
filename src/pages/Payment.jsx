// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData, getPayment } from '../redux/data/action'

// function Payment() {

//     const payment=useSelector((store)=>store.data.getPayment)
//     const dispatch=useDispatch()

//     console.log("payment",payment)

//     useEffect(()=>{
//         dispatch(getPayment())
//     },[])


//   return (
//     <div>Payment
//         <>
      

//         {payment.map((item)=>(
//             <>
//             {item.name}
//             </>
//         ))}

// </>
//     </div>
//   )
// }

// export default Payment








import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  
  HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'

export default function Payment() {

  const [liked, setLiked] = useState(false)



  const payment=useSelector((store)=>store.data.getPayment)
  const dispatch=useDispatch()

    console.log("payment",payment)

    useEffect(()=>{
        dispatch(getPayment())
    },[])


  return (

    <>

    Payment history
    {payment.map((item)=>(
      <>



<Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="grey"
        border={'1px'}
        borderColor="black"
        boxShadow={('6px 6px 0 black', '6px 6px 0 cyan')}>
         
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
         <Img src={item.qrimage}/>
        </Box>
        <Box p={4}>
          {/* <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
            
            </Text>
          </Box> */}
          <Heading color={'black'} fontSize={'1xl'} noOfLines={1}>
           Passenger name : {item.name}
          </Heading>
          <Box color="black">Price : {item.price}</Box>
          <Text fontSize={10} color={'black'} noOfLines={8}>
           Ticket cancellation is only available before 30 minites from the boarding time
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>







      </>
    ))}
    



    </>
  )
}