module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // Add more file paths if necessary
  ],
  theme: {
    colors: {
      // Configure your color palette here
      shadow:'#d9dee3',
      nav:'#697a8d',
      bg_layout:'rgba(255, 255, 255, .95)',
      bgm:'#696cff',
      bgh:'#787bff',
      bod:'#f5f5f9',
      txw:'#fff',
    },
    boxShadow:{
      ct:'0 1px 0 #d9dee3',
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
      '3r': '15rem',
    }
  },
  // Other Tailwind CSS configuration options...
}