import {AiOutlineArrowRight} from 'react-icons/ai'
import NavBar from '../Nav/NavBar'
const Home = () => {
  return (
   <>
   <NavBar/>
     <main id='home' className="  flex-col justify-center align-middle text-center mt-14 ">
     <div className=" text-center ">
       <p className=" text-Primary font-spacegrocksemibold text-3xl md:text-4xl font-bold tracking-wider">Stop Wasting</p>
       <p className=" font-spacegrockbold lg:text-5xl md:text-4xl text-2xl  mt-3 tracking-wider ">Your Time with Using Paper Invoice</p>
     </div>

      <div className="  flex-col justify-between gap-5 ">
     
        <div  className=" flex justify-center mt-8 " >
        {/* <div className=' bg-grayBackground w-20.37069 h-15.17575 '></div> */}
         <img src="/src/assets/images/HeroImage.webp"alt="" className=' lg:w-auto md:auto w-1/2' />
        
         </div>
         <p className=" font-spacegrocksemibold text-center mt-5">The invoice software improves speed and professionalism by allowing <br /> for branded invoice production and customization.</p>
      </div>
      <div className=''>
      <button className="btn w-32 text-black border-1 border-black  text-white font-spacrgrockregular mr-3 lg:hidden md:inline sm:inline">Login</button>
      <button className="btn w-32 bg-gray-800 text-white font-spacrgrockregular mt-5">Invoice <AiOutlineArrowRight/></button>
      </div>
      </main>
   </>
  )
}

export default Home