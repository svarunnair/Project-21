// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getBooking } from '../redux/data/action'
// import { Link, useNavigate } from 'react-router-dom'
// import { Button } from '@chakra-ui/react'

// function Booking() {

//   const booking=useSelector((store)=>store.data.getBooking)
//   const dispatch=useDispatch()
//   const navigate=useNavigate()

//   console.log("booking",booking)

//   useEffect(()=>{
//     dispatch(getBooking())
//   },[])

//   const handleHome=()=>{
//     navigate('home')
//   }
  


//   return (

    
//     <div>Booking

//       <Button onClick={handleHome}>Home</Button>

      
//       <div>
//       {booking.map((item)=>(
//         <>
//         {item.name}
//         </>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default Booking





import {
  Box,
  Flex,
  Avatar,
  
  
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  
  
  Text,
  
  List,
  ListItem,
  ListIcon,
  Button,
  
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { deleteBooking, getBooking } from '../redux/data/action'



const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg:('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Booking() {

  const booking=useSelector((store)=>store.data.getBooking)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("booking",booking)

  useEffect(()=>{
    dispatch(getBooking())
  },[])

  const handleHome=()=>{
    navigate('/home')
  }

  const handleRemove=(id)=>{
    alert('Seat  removed')
    dispatch(deleteBooking(id))
    
  }

  

  


  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    Booking page
      <Box bg={('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box onClick={handleHome}>Back</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>


      {booking.map((item)=>(
        <>


    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            >
            Seat no. :{item.seat}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'1xl'}></Text>
            <Text fontSize={'1xl'} fontWeight={800}>
             Name : {item.name}
             <Text>
             Genter :{item.catogory}</Text>
            
            </Text>
            <Text color={'gray.500'}></Text>
          </Stack>
        </Stack>
        Amount:{item.price}

       <Stack> <Button onClick={()=>handleRemove(item.id)}>Remove</Button></Stack>

        

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Payment
          </Button>
        </Box>
      
    </Center>
  
        
        </>
      ))}
    </>

    
  )
}