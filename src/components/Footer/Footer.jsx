import {FiCircle} from 'react-icons/fi'
import {BiLogoPlayStore} from 'react-icons/bi'
import {AiOutlineApple} from 'react-icons/ai'
const FooterItems = ['Home','Feature','About Us','Contact'];
const Footer = () => {
  return (
    <>
      <div className=" ">
           <div className=' flex flex-col lg:flex-row md:flex-row items-center  justify-around mt-32'>
               <div className=' '>
                  <div className=' flex-none lg:flex md:flex  items-center gap-4'>
                    
                      <div className='  w-10 lg:w-12 md:w-11 h-10 lg:h-12 md:h-11 border-1  border-black rounded-full'></div>
                    <div className=' w-44 lg:w-60 md:w-60 mt-4'> 
                        <h1 className=' font-spacegrockbold text-xs lg:text-2xl md:text-2xl '>Pyaysar</h1>
                         <p className=' font-spacrgrockregular tracking-wider text-sm lg:text-xl md:text-xl '>something are good</p>
                        </div>
                  </div>
                  <div className=' flex gap-4 lg:gap-9 md:gap-8 mt-3 '>
                      {
                          FooterItems.map((i,id)=>(
                            <li key={id} className='list-none text-sm lg:text-xl md:text-xl'>
                              <ul key={id} className=' cursor-pointer select-none font-spacegrocksemibold lg:font-spacegrockbold md:font-spacegrockbold md:no'>
                                 {i}
                              </ul>
                            </li>
                        ))
                      }
                  </div>
               </div>
            <div className=' flex flex-col items-center gap-2 mt-5 lg:mt-0 md:mt-0'>
                 <p className=' font-spacegrockbold text-xl'>Coming Soon</p>
                 <div className=' flex items-center flex-col lg:flex-row md:flex-col self-center gap-3 lg:gap-9 md:gap-7'>
                    <div className=' border-1 border-black w-36 lg:w-56 md:w-48   flex items-center rounded-lg justify-evenly '>
                       <p className=' text-2xl lg:text-3xl md:text-3xl  '> <BiLogoPlayStore /> </p>
                        <div>
                            <p className=' font-spacrgrockregular mt-1 mb-2 mr-1 text-xs lg:text-lg md:text-lg'>Download on the <br /> <span className=' text-Primary font-spacegrocksemibold text-sm lg:text-lg md:text-lg   ' >Google Play</span> </p>
                        </div>
                    </div>
                    <div>
                    <div className=' border-1 border-black  gap-2 w-36 lg:w-56 md:w-48  flex items-center rounded-lg justify-evenly '>
                       <p className=' text-2xl lg:text-3xl md:text-3xl  '> <AiOutlineApple /> </p>
                        <div>
                            <p className=' font-spacrgrockregular mt-1 mb-2 mr-1 text-xs lg:text-lg md:text-lg '>Download on the <br /> <span className=' text-Primary font-spacegrocksemibold text-sm lg:text-lg md:text-lg  ' >App Store</span> </p>
                        </div>
                    </div>
                    </div>
                 </div>
            </div>
           </div>
      </div>
    </>
  )
}

export default Footer