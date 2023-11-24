import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchBooking, postBooking, postData } from '../redux/data/action'
import { Box, Button, Grid, Img, InputRightAddon, Text, flexbox, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FlatTree, color } from 'framer-motion'
// 

import {
 
  Flex,
  Avatar,
  ColorMode,
 ColorModeProvider,
 useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  toggleColorMode,
 
  Stack,
  
  Center,
  
  Container,
  
  SimpleGrid,
  
  VisuallyHidden,
  chaka,
  IconButton,
  
  CloseButton,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { reload } from 'firebase/auth'





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
    localStorage.clear();
    
    navigate('/welcome')
    window.location.reload()
  }
  const handleClick=(item,id,seat,reserved)=>{
    if(item.reserved===false){
      
      toast({
        title: 'Boocked.',
        description: "We've booked the seat for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate(`/details/${id}/${seat}`)
      
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

  const handlePayment=()=>{
    navigate('/payment')
  }


  ////
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
          bg: ('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
        
      </Box>
    )
  }
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentTime, setCurrentTime] = useState('');
  //


  // moment().format('MMMM Do YYYY, h:mm:ss a'); // November 21st 2023, 11:14:45 pm
  // moment().format('dddd');                    // Tuesday
  // moment().format("MMM Do YY");               // Nov 21st 23
  // moment().format('YYYY [escaped] YYYY');     // 2023 escaped 2023
  // moment().format();       





  useEffect(() => {
    const updateCurrentTime = () => {
      const formattedTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log("formated",formattedTime)
      // if("November 22nd 2023, 9:19:32 pm"===formattedTime){
      //   localStorage.clear()
      //   navigate("/welcome")
      // }
      setCurrentTime(formattedTime);
    };

   
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);
    return            () =>       clearInterval(intervalId);
  }, []);


  


  return (


    //
<>

    <Box bg={('gray.100', 'gray.900')} px={4}>


      <Text color={'white'}>Time {currentTime}</Text>
        <Flex h={36} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          </Box>
         <br/> <Img marginRight={100} width={400} src='https://www.bigredbus.com.au/wp-content/uploads/2021/05/Big-red-bus-websites-logo-1.png'/>
       
          

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {/* <Button width={120} >Booking history</Button> */}
              

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
                  <MenuItem onClick={handlePayment}>Payment page</MenuItem>
                  <MenuItem onClick={handleBooking}>Booking page</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>




    
    

    <Grid justifyContent={'center'}   >
     
    
      
<Text color={'yellow.400'} fontWeight={3} fontSize={10} fontFamily={'serif'}>Book your journey now with the world's largest bus platform</Text>
      <Grid marginTop={10} width={'400px'}  gridTemplateColumns={"repeat(3,1fr)"}>
     
     <Grid gap="5px" gridTemplateColumns={"repeat(4,1fr)"} >

             {mainData.map((item, index) => (
               <Box marginTop={1}
               onClick={()=>handleClick  (item,item.id,item.seat)}
               cursor={'pointer'}
                
                 key={index}
                 w="50px" 
                 h="50px" 
                 borderRadius={15}
                 backgroundColor={item.reserved?"red":"green"}
                 marginRight={index === 0 ? '100px' : 0}
               >
                  <Text paddingTop={'12px'}>{item.seat}</Text>
               </Box>
             ))}
           </Grid>


           </Grid>

           {/* <Button onClick={handleLogout}>Logout</Button> */}

      

    </Grid>


    <Box marginTop={20}
      bg={('gray.50', 'gray.900')}
      color={('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text>Company</Text>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Support</Text>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Safety Center
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Legal</Text>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Install App</Text>
            <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJuAh_3alqEw5TqDWoogxzHMg-drgUl0LQg&usqp=CAU'/>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Box label={'Twitter'} href={'#'}>
              <FaTwitter />
            </Box>
            <Box label={'YouTube'} href={'#'}>
              <FaYoutube />
            </Box>
            <Box label={'Instagram'} href={'#'}>
              <FaInstagram />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>


    </>
  )
}

export default Home


////

