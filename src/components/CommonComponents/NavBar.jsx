import React from 'react'

const NavBar = () => {

    const glassmorphicStyle = {
        background: 'rgba(255, 255, 255, 0.1)', // Transparent white
        borderRadius: '40px',                  // Rounded corners
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)', // Subtle shadow
        backdropFilter: 'blur(10px)',          // Background blur for glass effect
        WebkitBackdropFilter: 'blur(10px)',    // Safari support
        border: '1px solid rgba(255, 255, 255, 0.2)', // Border to enhance glass effect
        padding: '20px',                       // Padding inside the card
        color: '#000',                         // Text color
        textAlign: 'center',                   // Center text alignment
        margin: '0 auto',                      // Center the card horizontally
    };

  return (
    <div style={glassmorphicStyle} className='grid grid-flow-col w-[1034px]'>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>Where To Go</div>
        <div className='cursor-pointer'>About Ethiopia</div>
        <div className='cursor-pointer'>Events and Festivals</div>
        <div className='cursor-pointer'>Blogs</div>
    </div>
  )
}

export default NavBar