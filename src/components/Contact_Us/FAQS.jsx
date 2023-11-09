import  { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Icon } from "@chakra-ui/react";
import { MdAdd, MdRemove } from "react-icons/md"; // Import plus and minus icons

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua.",
    },
  ];

  const toggleAccordion = (index) => {
    if (index !== 0) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
<>
<div className=' flex justify-evenly align-middle text-center items-center mt-20  text-4xl'>

<div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

<div  className=' w-56 lg:w-80 md:w-64'>
     <p className=' font-spacegrockbold text-xl lg:text-3xl md:text-2xl' >FAQ</p>
     <h1 className=' text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Frequently Asked <br className="lg:hidden" /> Questions</h1>
</div>

<div className=' w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>

</div>
<div className="  mt-10 container mx-auto p-4 lg:max-w-[980px] sm:max-w-[714px]">

<Accordion allowToggle >
  {faqData.map((item, index) => (
    <AccordionItem key={index}>
      {({ isExpanded }) => (
        <>
          <h2 className="mb-2">
            <AccordionButton
              className="flex justify-between p-2 border rounded shadow-sm relative"
              onClick={() => toggleAccordion(index)}
              isLazy
              isLoaded={index === 0}
            >
              <span className=" font-spacegrockbold">{item.question}</span>
              <Icon
                as={isExpanded ? MdRemove : MdAdd}
                boxSize={19}
                className="transition-transform transform border-1 border-black rounded-md"
                style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={isExpanded || activeIndex === index ? "block" : "none"}>
            <p>{item.answer}</p>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  ))}
</Accordion>
</div>
</>
  );
};

export default FAQS;