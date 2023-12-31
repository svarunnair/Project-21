
import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Img,
  Button,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import MainRoutes from '../routes/MainRoutes'
import PrivateRoutes from '../routes/PrivateRoutes'
import { useNavigate } from 'react-router-dom'


// interface LinkItemProps {
//   name: string
//   icon: IconType
// }
const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Bookings', icon: FiTrendingUp },
  { name: 'Payment history', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },

]



export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()


 
  



  return (
    
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">


       <PrivateRoutes/>
        
      </Box>
    </Box>
  )
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void
// }

const SidebarContent = ({ onClose, ...rest }) => {

  const navigate=useNavigate()



  const handlePath = (name)=>{
  if(name==="Home"){
    navigate('/home')
  }
  if(name==="Booking"){
    navigate('/booking')
  }
  if(name==="Payment history"){
    navigate('/payment')
  }
  if(name==="Home"){
    navigate('/home')
  }
  if(name==="Home"){
    navigate('/home')
  }
  }


  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Img borderRadius={50} width={70} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yhZuwWOTUxpt0bX2KCd99v9apXA1lyc0qw&usqp=CAU'/>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem onClick={()=>handlePath(link.name)} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

// interface NavItemProps extends FlexProps {
//   icon: IconType
//   children: ReactText
// }
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

// interface MobileProps extends FlexProps {
//   onOpen: () => void
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}