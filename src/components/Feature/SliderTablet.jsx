
import { Flex, Grid, Box, useBreakpointValue } from '@chakra-ui/react';
import { AiOutlineArrowRight,AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const YourComponent = () => {
  const listBox = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];

  const currentI = 0; // Assuming you have currentI defined

  const prev = () => {
    // Your prev function logic
  }

  const next = () => {
    // Your next function logic
  }

  const isTabletView = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <div className='flex justify-evenly align-middle text-center items-center mt-20 text-4xl'>
        <div className='w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>
        <div className='w-56 lg:w-80 md:w-64'>
          <p className='font-spacegrockbold text-xl lg:text-3xl md:text-2xl'>Why <span className='text-Primary'>Choose</span> Pyaysar <br /> Invoicing For Your Business</p>
          <h1 className='text-title font-spacrgrockregular text-xs lg:text-xl md:text-2xl'>Our Feature</h1>
        </div>
        <div className='w-14 lg:w-9.8125 md:w-44 bg-divider h-0 rounded-sm'></div>
      </div>

      <Flex align='center' justify='center' mt='2rem'>
        <AiOutlineLeft
          className={` ${currentI === 0 ? 'invisible' : 'visible'} cursor-pointer select-none text-3xl `}
          onClick={prev}
        />

        <Grid templateColumns={isTabletView ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'} gap={4}>
          {listBox.map((item, id) => (
            <Box key={id} className={`shadow-xl ${id === currentI ? 'active' : 'hidden'} flex justify-evenly w-boxfsize border-black border-1 rounded-0.625 h-b1`}>
              <p className='w-64 font-spacegrockbold font-medium text-2xl tracking-wider h-20 align-middle flex items-center'>{item}</p>
              <button className="btn w-14 h-10 text-xl bg-gray-800 rounded-xl text-white font-spacrgrockregular mt-auto self-end mb-2"><AiOutlineArrowRight/></button>
            </Box>
          ))}
        </Grid>

        <AiOutlineRight
          className={`cursor-pointer select-none text-3xl ${currentI === listBox.length - 1 ? 'invisible' : 'visible'}`}
          onClick={next}
        />
      </Flex>
    </>
  );
};

export default YourComponent;