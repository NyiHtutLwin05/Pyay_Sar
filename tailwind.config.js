/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       width:{
         '9.8125':'9.8125rem',
         ' 20.37069':' 20.37069rem',
          'boxfsize':'12.8125rem',
          'boxflsixe':'20rem',
          'faqw':' 30rem',
          'faqm':'20rem',
          'faqwt':' 50rem',
          'boxw': '58rem',
          'boxwt': '40rem',
          'boxwm' :'20rem',
          'inputw': '20rem',
          'inputm':'19rem',
          'dividerw': '1040px',
          'dividerwm':'700px',

           
       },
      colors:{
          'Primary':'#1D4ED8',
          'divider':'#BDBDBD',
          'grayBackground': '#CCCCCC',
          'title':'#757572'
      },
      fontFamily:{
        'spacrgrockregular' :['Space Grotesk Regular'],
        'spacegrocksemibold':['Space Grotesk Semibold'],
        'spacegrockbold':['Space Grotesk Bold'],
         
      },
       height:{
        '37.75': '37.75rem',
        '0':'1.5px',
        '15.17575':'15.17575rem',
         'b1':'12.5rem',
         'b2':'16.9375rem',
         'boxh': '18rem',
          'bowhm':'14rem'
         
       },
       boxShadow: {
        custom: '10px 7px 5px 0px rgba(179,161,161,0.47)',
      },
       borderWidth:{
         '1':'1.6px'
       },
       borderRadius:{
        '0.625':'0.625rem',
       }
    },
  },
  plugins: [require("daisyui")],
}

