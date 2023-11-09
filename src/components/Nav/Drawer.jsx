import React from 'react'
import {
    Drawer,
    DrawerBody, 
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Link,
    useDisclosure,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const DrawerUI = ({onOpenProp, placementProp, onCloseProp, isOpenProp, btnRefProp}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [placement, setPlacement] = React.useState('left')
    
  return (
    <>
           <HamburgerIcon onClick={onOpen}  ref={btnRef} className=" cursor-pointer text-3xl"/>
        
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}  >
     <DrawerOverlay />
     <DrawerContent>
       <DrawerHeader borderBottomWidth='1px' className=" font-spacegrockbold">Pyay Sar</DrawerHeader>
       <DrawerBody className=" font-spacegrocksemibold flex flex-col gap-2 mt-4 ">
        <Link>Home</Link> <br />
        <Link>Feature</Link><br />
        <Link>About Us</Link><br />
        <Link>Contact</Link><br />
       </DrawerBody>
     </DrawerContent>
   </Drawer>
    </>
  )
}

export default DrawerUI