import { Flex } from '@chakra-ui/react'
// import {AiOutlineArrowRight} from 'react-icons/ai'
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
const Box = () => {
  return (
    <>
    <Flex className=' mt-14 mb-10 ' justify='center' align='center'>
       
         <div className='  border-1 border-black w-boxwm lg:w-boxw md:w-boxwt h-bowhm lg:h-boxh md:h-boxh rounded-xl shadow-custom  flex justify-center items-center'>
          <div className=' flex flex-col justify-center  self-center '>
            <div className=' flex flex-col align-middle text-center items-center  '>
              <h1 className=' font-spacegrockbold text-2xl lg:text-4xl md:text-3xl'>Don&apos;t miss out! </h1>
              <p className=' font-spacegrocksemibold tracking-widest text-sm lg:text-xl md:text-xl mt-5'>Run your business with condidence</p>
              </div>
              <div className=" flex justify-center align-middle text-center items-center mt-5 lg:mt-9 md:mt-6">
                {/* <input type="text" placeholder="Enter your email address" className="input input-bordered w-inputw " /> 
                <button className="btn bg-gray-800 text-white font-spacrgrockregular   "> <AiOutlineArrowRight/></button> */}
                    <InputGroup  height='7rem' justifyContent='center'>
      <Input
        pr='4.5rem'
        border='2px'
        borderColor='black'
        placeholder='Enter your email address'
        borderRadius='2xl'
        fontSize={{ base: 'sm', md: 'md' }}
        height='3rem'
        
      />
      <InputRightElement  height='3rem' width='7.5rem'  display="flex" alignItems="center" justifyContent="center" >
        <Button size='sm' className="   font-spacegrockbold bg-black" colorScheme="black" borderRadius='lg' _hover={{ bg: 'white',
    cursor: 'pointer'}} >
          Contact Us
        </Button>
      </InputRightElement >
    </InputGroup>
                </div>
                </div>
         </div>
        
     </Flex>
    </>
  )
}

export default Box