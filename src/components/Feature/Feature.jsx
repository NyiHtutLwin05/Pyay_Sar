
import { Box, useBreakpointValue } from '@chakra-ui/react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Slider from './Slider';

const listBox = ['PDF Generation','Invoice Generation','Dashboard Overview','Payment Tracking','Automated Calculation','Customization','Client Management','Product and Service Catalog', 'Finical Report'];


const Feature = () => {
    const isMobileViewOrTablet =useBreakpointValue({base:true,lg:false,md:true});
  return (
      <>
      <Box id='feature'>
        {
            isMobileViewOrTablet ? 
             <Slider/> :(
                <div className=''>
       
                <div className=' flex justify-evenly align-middle text-center items-center mt-20 text-4xl'>
         
                  <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>
         
                  <div className=' w-56 lg:w-80 md:w-64'>
                      <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >Why <span className=' text-Primary'>Choose</span>  Pyaysar <br /> Ivoicing For Your Business</p>
                      <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Our Feature</h1>
                  </div>
         
                  <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>
                </div>
               
                  <div className=' mt-16 mb-4 grid  grid-cols-3 gap-y-4   justify-items-center '>
                     {
                         listBox.map((i,id)=>{
                             let selfClass;
                             if([0,2].includes(id)){
                                 selfClass = 'self-end'
                             }else if([3,5].includes(id)){
                                 selfClass = 'self-center'
                             }else if([6,8].includes(id)){
                                 selfClass = 'self-start'
                             }
                           return(
                             <div key={id} className={`shadow-custom p-2 pr-4 flex  justify-evenly w-boxflsixe  border-black border-1 rounded-0.625 ${selfClass} ${[1,4,7].includes(id) ? 'h-b2': 'h-b1'}`}>
                             <div className='   '>
                             <p className=' mt-2 w-64 pl-4  font-spacegrockbold font-medium text-2xl tracking-wider h-20 flex '>{i}</p>
                             </div>
                               
                             
                             <button className="btn w-14 h-10 text-xl bg-gray-800 rounded-xl text-white font-spacrgrockregular  self-end mb-2   "> <AiOutlineArrowRight/></button>
                             
                          </div> 
                         )})
                     }
         
                  </div>
                </div>
             )
        }
      </Box>
     
      </>
  )
}

export default Feature