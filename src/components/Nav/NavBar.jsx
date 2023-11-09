import { Box, useBreakpointValue,Link } from '@chakra-ui/react';
import { useState } from 'react';
import {BiWorld} from 'react-icons/bi'
import {RiArrowDownSLine , RiArrowUpSLine} from 'react-icons/ri'
import NavMobile from './NavMobile';
import DrawerUI from './Drawer';


const MenuItems = ['Home','Feature','About Us','Contact'];

const NavBar = () => {
  const [isArrowDown, setArrow] = useState(true);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const handleClick = ()=>{
    setArrow(p=>!p)
  };
  // const handleScroll = (e,id)=>{
  //     e.preventDafault();
  //     document.getElementById(id).scrollIntoView({
  //            behavior:'smooth',
  //     })
  // }
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <Box>
      {
        isMobile ? (
        
        <NavMobile/>
        
        ) :(
          <div className=' flex justify-around text-center items-center mt-5 '>
          <div className=" flex gap-11 items-center">
            <div className=' w-12 h-12 border-1  border-black rounded-full'></div>
              {
                MenuItems.map((i,id)=>(
                    <li key={id} className='list-none'>
                      <ul key={id} className=' cursor-pointer select-none font-spacegrockbold text-lg md:hidden lg:block'>
                      <Link as='button' onClick={()=> handleScroll(i.toLowerCase()) }> {i}</Link>  
                      </ul>
                    </li>
                ))
              }
              </div>
            <div className=' flex gap-4 items-center'>
               <div className=' flex text-center items-center gap-2 align-sub'>
          
              <BiWorld className='text-2xl '/>
               <p className=' select-none font-spacegrocksemibold'>English</p>
               {
                isArrowDown ?(
                  <RiArrowDownSLine className={`cursor-pointer text-2xl  transition-transform duration-300 transform ease-in ${ isArrowDown ? 'rotate-0': 'rotate-180'}`} onClick={handleClick} />
                ):(
                  <RiArrowUpSLine className={`cursor-pointer text-2xl transition-transform duration-300 transform ease-in ${isArrowDown ? 'rotate-180': 'rotate-0'} `}  onClick={handleClick} />
                )
               }
              
               </div>
             <button className="btn w-32 bg-gray-800 text-white font-spacrgrockregular lg:flex md:hidden sm:hidden ">Login</button>
             <div className='lg:hidden'>
                <DrawerUI />
             </div>
            </div>
             
       </div>
        )
      }
    </Box>
    
    </>
  )
}

export default NavBar