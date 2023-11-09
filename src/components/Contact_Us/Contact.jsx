import { Button, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"




const Contact = () => {
  return (
    <>

      <Flex id="contact" flexDir={{base:'column',lg:'column', md:'column'}} justifyContent='center'>
          <Flex marginBlock='2rem' align='center' justify='space-around' alignItems='center' textAlign='center'>
          <div className='w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div> 
          <div  className=' w-56 lg:w-80 md:w-64 ' >
     <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >Work with Us</p>
     <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Contact Us</h1>
</div>
          <div className='w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div> 
          </Flex>
          <Flex  align='center' alignItems='center' justify='space-evenly' flexDir={{base:'column',lg:'row',md:'row'}}>
            
          <div className=" hidden lg:inline md:inline "><img src="/src/assets/images/Contact_us.webp" alt=""  /></div>
          <div className=" flex flex-col justify-cente align-middle items-center ">
            <div><p className=" font-spacrgrockregular text-xs lg:text-lg md:text-lg w-56  lg:w-96 md:w-96 font-bold text-center lg:text-left md:text-left ">Feel free to get in touch with us if you have any <span className="text-Primary"> questions, suggestions, or inquiries.</span> <br className="hidden lg:inline" /> Our dedicated team is here to assist you. You can reach out to us through the contact form below</p></div> 
          <div className=" inline lg:hidden md:hidden"><img src="/src/assets/images/Contact_us.webp" alt="" className=" w-full" /></div>
           
            <InputGroup  height='7rem' justifyContent='center' marginBlock='2rem' >
      <Input
        pr='4.5rem'
        border='2px'
        borderColor='black'
        placeholder='Enter your email address'
        borderRadius='2xl'
        fontSize={{ base: 'sm', md: 'md' }}
        height='3rem'
       
        
      />
      <InputRightElement height='3rem' width='7.5rem'  display="flex" alignItems="center" justifyContent="center" >
        <Button size='sm' className="   font-spacegrockbold bg-black" colorScheme="black" borderRadius='lg' _hover={{ bg: 'white',
    cursor: 'pointer'}} >
          Contact Us
        </Button>
      </InputRightElement >
    </InputGroup>  
          </div>
          
          </Flex>
          </Flex>   
     
    </>
  )
}

export default Contact