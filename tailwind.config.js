module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // Add more file paths if necessary
  ],
  theme: {
    extend: {

      colors: {
        // Configure your color palette here
        shadow:'#d9dee3',
        nav:'#697a8d',
        bg_layout:'rgba(255, 255, 255, .95)',
        bgm:'#696cff',
        bgh:'#787bff',
        bod:'#f5f5f9',
        txw:'#fff',
        gray:{
          100:'#566a7f',
        },
        backdrop:'#22303e',

      },
      boxShadow:{
        ct:'0 1px 0 #d9dee3',
        'drop-down': '0 .25rem 1rem rgba(161, 172, 184, .45)',
      },
      borderWidth:{
        '7':'7px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
      },
      inset: {
        '3px': '15rem',
      },
      fontSize:{
        
      },
      translate: {
        '-full-x': '-100%', // Custom translate value
        '3d': 'translate3d(0, 0, 0)',
      },
      fontFamily: {
        'public-sans': ['Public Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      gridTemplateColumns: {
        'product_card': '10% 1fr',
      },
    }
   
  },
  // Other Tailwind CSS configuration options...
}