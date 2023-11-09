import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from '@chakra-ui/react'

const Faq = () => {
  return (
   <>
     <div  className=" mb-6">
     <div className=' flex justify-evenly align-middle text-center items-center mt-20 mb text-4xl'>

<div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

<div  className=' w-56 lg:w-80 md:w-64'>
     <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >FAQ</p>
     <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Frequently Asked <br className="lg:hidden" /> Questions</h1>
</div>

<div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

</div>
<Flex justify='center' className=' mt-8'>
      <div className=' '>
  <Accordion  >
    <div className=' shadow-md rounded-lg'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Lorem ipsum dolor sit amet consecter.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </div>
  <div className=' shadow-md rounded-lg'>
  <AccordionItem height='3rem'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Lorem ipsum dolor sit amet consecter.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </div>
  <div className=' shadow-md rounded-lg'>
  <AccordionItem height='3rem'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Lorem ipsum dolor sit amet consecter.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </div>
  <div className=' shadow-md rounded-lg'>
  <AccordionItem height='3rem'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Lorem ipsum dolor sit amet consecter.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </div>
  <div className=' shadow-md rounded-lg'>
  <AccordionItem height='3rem'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Lorem ipsum dolor sit amet consecter.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </div>
</Accordion>
</div>
</Flex>
{/* <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div> */}
{/* <div className=" flex justify-center mt-10">
<div className=" w-faqw h-faqh gap-7 ">
<div className="collapse collapse-plus shadow-md ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Lorem ipsum dolor sit amet consecter.

  </div>
  <div className="collapse-content"> 
    <p>Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.</p>
  </div>
</div>
<div className="collapse collapse-plus shadow-md ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Lorem ipsum dolor sit amet consecter.

  </div>
  <div className="collapse-content"> 
    <p>Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.</p>
  </div>
</div>
<div className="collapse collapse-plus shadow-md">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Lorem ipsum dolor sit amet consecter.
  </div>
  <div className="collapse-content"> 
    <p>Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.</p>
  </div>
</div>
<div className="collapse collapse-plus shadow-md">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Lorem ipsum dolor sit amet consecter.
  </div>
  <div className="collapse-content"> 
    <p>Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.Lorem ipsum dolor sit amet consectetur. Nullam ac non consequat vulputate vitae mi sit duis.</p>
  </div>
</div>
</div>
</div> */}
     </div>
   </>
  )
}

export default Faq