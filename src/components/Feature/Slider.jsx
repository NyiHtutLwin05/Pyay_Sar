import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import {AiOutlineArrowRight,AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'

const Slider = () => {
    const listBox = ['PDF Generation','Invoice Generation','Dashboard Overview','Payment Tracking','Automated Calculation','Customization','Client Management','Product and Service Catalog', 'Finical Report'];
    const [currentI,setCurrentI]=useState(0);
    const next=()=>{
        setCurrentI((next)=>(next+1) %listBox.length)
    }
    const prev=()=>{
        setCurrentI((prev)=>(prev - 1 + listBox.length) % listBox.length)
    }
  return (
    <>
    <div className=' flex justify-evenly align-middle text-center items-center mt-20 text-4xl'>
         
         <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

         <div className=' w-56 lg:w-80 md:w-64'>
             <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >Why <span className=' text-Primary'>Choose</span>  Pyaysar <br /> Ivoicing For Your Business</p>
             <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Our Feature</h1>
         </div>

         <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>
       </div>
    <Flex align='center' justify='center' mt='2rem'>
        <AiOutlineLeft className={` ${currentI===0 ? 'invisible':'visible'} cursor-pointer select-none text-3xl `} onClick={prev} /> 
     
      {
        listBox.map((i,id)=>(
            <>
             <Flex align='center' key={id}  >
            {/* <div key={id} className=' border-2 border-black'> */}
               
               <div key={id} className={`shadow-xl ${id === currentI ?'active':'hidden'} flex p-2 pr-3  justify-evenly w-boxfsize  border-black border-1 rounded-0.625  h-b1`}>

<p className=' w-64 pl-2 font-spacegrockbold font-medium text-xl tracking-wide h-20  align-middle flex items-center'>{i}</p>  

<button className="btn w-14 h-10 text-xl bg-gray-800 rounded-xl text-white font-spacrgrockregular mt-auto self-end mb-2   "> <AiOutlineArrowRight/></button>
</div> 
              
                 
            {/* </div> */}
            </Flex>
            </>
           
        ))
      }
       <AiOutlineRight className={`cursor-pointer select-none text-3xl ${currentI === listBox.length - 1 ? 'invisible':'visible' } ` }onClick={next}/>   
     
      </Flex>
    </>
  )
}

export default Slider
