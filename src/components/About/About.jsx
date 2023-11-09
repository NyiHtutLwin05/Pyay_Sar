
const About = () => {
  return (
    <>
     <div className=" mb-6 " id="about us">
        <div className=' flex justify-evenly  align-middle text-center items-center mt-20 text-4xl'>

        <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

        <div  className=' w-56 lg:w-80 md:w-64'>
             <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >Making Invoicing<br />Effortless</p>
             <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>About Us</h1>
        </div>

        <div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

        </div>

         <div className="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-evenly mt-9 items-center ">
             <div className=" lg:w-1/2 md:w-3/5 w-auto p-5"> <h1 className=" font-spacegrockbold font-bold text-xl md:text-3xl sm:text-2xl ">At Pyaysar</h1>    
             <p className=" font-spacrgrockregular lg:text-lg md:text-lg text-xs font-bold mt-6 ">we understand the importance of <span className=" text-Primary">efficient</span> and <span className=" text-Primary"> hassle-free </span> <span className=" text-Primary"> invoicing </span>for your business. <br />We are dedicated to simplifying your invoicing processes, allowing you to focus on what matters most – growing your business.</p></div>
              <div className=" flex self-end">
                <img src="/src/assets/images/Big Shoes - Discussion (1) 1.webp" alt="" className=" w-40 lg:w-auto md:w-56 " />
              </div>
         </div>

         <div className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-evenly items-center mt-0 lg:mt-9 md:mt:6  p-2 ">
         <div>
                <img src="/src/assets/images/Big Shoes - Discussion (1) 2.webp" alt="" className=" hidden lg:block md:inline w-40 lg:w-auto md:w-56" />
              </div>
             <div className="w-auto p-5  flex-col justify-center lg:w-1/2 md:w-3/5 mt-8"> <h1 className=" font-spacegrockbold font-bold text-xl md:text-3xl sm:text-2xl ">Our Mission: <br className="lg:hidden md:hidden " /> Making Invoicing Effortless
</h1>    
             <p className=" font-spacrgrockregular lg:text-lg md:text-lg text-xs font-bold mt-6 ">
             Our mission is to provide you with a <span className=" text-Primary">comprehensive and user-friendly </span> invoicing solution. <br /> Whether you&apos; re a <span className=" text-Primary"> small business owner, a freelancer</span>, or part of a larger enterprise, our services are designed to meet your unique invoicing needs.
</p></div>
            
         </div>
         </div>
    </>
  )
}

export default About