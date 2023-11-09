import {BiLogoLinkedin} from 'react-icons/bi'
import {RiTwitterXFill} from 'react-icons/ri'
import {FiFacebook} from 'react-icons/fi'
import { Center, Divider, Flex, Link } from '@chakra-ui/react'
const FooterList =['Privacy','Terms','Copyright']
const FooterBar = () => {
  return (
    <>
    <main className=' flex justify-center items-center '>
    <div className=' mb-3 '>
       <div className=' mt-11 flex justify-center  '>
         <div className=' flex gap-4 lg:gap-8 md:gap-8 justify-center mb-2 '>
         <p className=' text-xl lg:text-2xl md:text-2xl'><RiTwitterXFill /></p> 
             <p className='text-xl lg:text-2xl md:text-2xl'><BiLogoLinkedin/></p>
             
             <p className='text-xl lg:text-2xl md:text-2xl'><FiFacebook/></p>
         </div>
       </div>
        <div className=' flex justify-center'>
        <div className=' mb-3 mt-4 border-b-1 border-black flex lg:w-dividerw md:w-dividerwm w-80 '></div>
        </div>
        <div className=' lg:flex md:flex  justify-center items-center  lg:gap-8 md:gap-7'>
          <div className=' flex justify-center '>  <div className='   text-center'><p className='  w-64 lg:w-72 md:w-72 select-none font-spacegrocksemibold'>© Copyright. All rights reserved.</p></div> </div>
            <div className=' h-6 border-l-1 lg:border-black md:border-black hidden '></div>
            <div className='flex justify-center'>
            <div className=' flex gap-3 text-xl cursor-pointer  justify-center'>
                {/* {
                    FooterList.map((i,id)=>(
                      <div key={id} >
                          <ul className=' select-none font-spacegrockbold text-lg'>
                            <li>{i}</li>
                          </ul>
                      </div>
                    ))
                } */}
                <Flex gap='1rem' className=' font-spacegrockbold text-sm lg:text-xl md:text-xl'>
                   <Link>Privacy</Link>
                   <Link>Terms</Link>
                   <Link>Copyright</Link>
                   </Flex>
            </div>
            </div>
        </div>
        </div>
        </main>
        {/* <div className=' mt-20 mb-6'>
          <Flex justify='center'>
          <div className=' flex gap-3 lg:gap-4 md:gap-4'>
        <p className=' text-xl lg:text-2xl md:text-2xl'><RiTwitterXFill /></p> 
             <p className='text-xl lg:text-2xl md:text-2xl'><BiLogoLinkedin/></p>
             
             <p className='text-xl lg:text-2xl md:text-2xl'><FiFacebook/></p>
             </div>
             </Flex>
             <Flex justify='center' mt='1rem'>
             <Divider orientation='horizontal' bg='black' h={{base:'0.5px',lg:'1px',md:'1px'}} w={{base:'300px',lg:'1040px',md:'1000px'}}  />
             </Flex>
             <Flex justify='center'>
               <div>
             <p className='  w-64 lg:w-72 md:w-72 select-none font-spacegrocksemibold'>© Copyright. All rights reserved.</p>
             </div>
               <div>              
               <div className=' h-6 border-l-1 lg:border-black md:border-black'></div>
               </div>
                
                  <Flex gap='1rem' className=' font-spacegrockbold'>
                   <Link>Privacy</Link>
                   <Link>Terms</Link>
                   <Link>Copyright</Link>
                   </Flex>
                
             </Flex>
        </div> */}
    </>
  )
}

export default FooterBar