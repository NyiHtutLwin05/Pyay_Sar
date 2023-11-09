
import { ChakraProvider} from "@chakra-ui/react"
import About from "./components/About/About"
import Box from "./components/Contact_Us/Box"
import Contact from "./components/Contact_Us/Contact"
import Faq from "./components/Contact_Us/Faq"
import Feature from "./components/Feature/Feature"
import Footer from "./components/Footer/Footer"
import FooterBar from "./components/Footer/FooterBar"
import Home from "./components/Home/Home"
import NavBar from "./components/Nav/NavBar"
import NavMobile from "./components/Nav/NavMobile"
import Toast from "./components/Toast/Toast"

import DrawerUI from "./components/Nav/Drawer"
import Faqtest from "./components/Contact_Us/Faqtest"
import Slider from "./components/Feature/Slider"
import Carousel from "./components/Feature/Slider"
import YourComponent from "./components/Feature/SliderTablet"
import FooterMenu from "./components/Footer/FooterMenu"
import FAQS from "./components/Contact_Us/FAQS"


function App() {
 

  return (
    <>
    
    
      <ChakraProvider>
      <Toast/>
      <Home id='home'/>
     
    <Feature id='feature'/>
      <About id='about us'/>
      {/* <Contact id='contact'/> */}
      {/* <FAQS/> */}
      {/* <Box/> */}
      {/* <Footer /> 
      <FooterBar/> */}
      
      </ChakraProvider>
       {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feature' element={<Feature/>} />
        <Route path='/about us' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> */}
      {/* <Feature/>
      <About/>
      <Contact/>
       <FAQS/>
      <Box/>
      <Footer /> */}
        {/* <NavBar/>
      
        <Home/>
        <Feature/>
      
        <About/>
        
        <Contact/>
       
        <Box/>
        <Footer />
        
        <FooterMenu/>
        <FooterBar/> */}
      
    </>
  )
}

export default App
