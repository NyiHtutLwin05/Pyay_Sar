import { Flex, Text } from "@chakra-ui/react"
import {BiLogoPlayStore} from 'react-icons/bi'
import {AiOutlineApple} from 'react-icons/ai'
const FooterItems = ['Home','Feature','About Us','Contact'];
const FooterMenu = () => {
  return (
    <>
     
      <Flex align='center' justify='space-evenly'>
          <Flex flexDir={{base:'column',lg:'column',md:'column'}}>
              <Flex alignItems={{base:'self-start',lg:'center'}}  flexDir={{base:'column',lg:'row',md:'column'}} gap={{base:'1rem'}}>
              <div className=' w-12 h-12 border-1  border-black rounded-full'></div>
            <div>
            <div className="">
                <h1 className=' font-spacegrockbold text-xl lg:text-2xl md:text-2xl '>Pyaysar</h1>
                <p className=' font-spacrgrockregular tracking-normal lg:tracking-wider md:tracking-wider text-base lg:text-xl md:text-xl '>something are good</p>
            
                </div>
           
            </div>
            </Flex>
            <div>
           
            </div>
            </Flex>
            
          <Flex flexDir={{base:'column',lg:'column',md:'column'}} gap='1rem'>
            <div>
            <Text className=" font-spacegrockbold" fontSize={{base:'xl',lg:'2xl',md:'2xl'}}>Coming Soon</Text>
            </div> 
             <Flex flexDir={{base:'column',lg:'row',md:'column'}} gap={{base:'0.5rem',lg:'1rem',md:'1rem'}}>
             <div className=' border-1 border-gray-500 w-36 lg:w-56 md:w-48   flex items-center rounded-lg justify-evenly '>
                       <p className=' text-2xl lg:text-3xl md:text-3xl  '> <BiLogoPlayStore /> </p>
                        <div>
                            <p className=' font-spacrgrockregular mt-1 mb-2 mr-1 text-xs lg:text-lg md:text-lg'>Download on the <br /> <span className=' text-Primary font-spacegrocksemibold text-sm lg:text-lg md:text-lg   ' >Google Play</span> </p>
                        </div>
                    </div>
                    <div className=' border-1 border-gray-500   gap-2 w-36 lg:w-56 md:w-48  flex items-center rounded-lg justify-evenly '>
                       <p className=' text-2xl lg:text-3xl md:text-3xl  '> <AiOutlineApple /> </p>
                        <div>
                            <p className=' font-spacrgrockregular mt-1 mb-2 mr-1 text-xs lg:text-lg md:text-lg '>Download on the <br /> <span className=' text-Primary font-spacegrocksemibold text-sm lg:text-lg md:text-lg  ' >App Store</span> </p>
                        </div>
                    </div>
                    </Flex>
                    </Flex>
          </Flex>
          {/* <Flex display={{base:'flex',lg:'none',md:'none'}} alignItems='center' justify='center'  gap={{base:'12px',lg:'2rem',md:'1rem'}} mt={{base:'0.2rem',lg:'1rem',md:'1rem'}} w={{base:'18rem'}}>
            {
                          FooterItems.map((i,id)=>(
                            <li key={id} className='list-none text-sm lg:text-xl md:text-xl '>
                              <ul key={id} className=' cursor-pointer select-none font-spacegrocksemibold lg:font-spacegrockbold md:font-spacegrockbold md:no'>
                                 {i}
                              </ul>
                            </li>
                        ))
                      }
            </Flex> */}
            
    </>
  )
}

export default FooterMenu