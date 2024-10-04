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
        color: '#fff',                         // Text color
        textAlign: 'center',                   // Center text alignment
        margin: '0 auto',                      // Center the card horizontally
    };

  return (
    <div style={glassmorphicStyle} className='grid grid-flow-col cursor-pointer absolute top-10 left-[220px] w-[1034px]'>
        <div>Home</div>
        <div>Where To Go</div>
        <div>About Ethiopia</div>
        <div>Events and Festivals</div>
        <div>Blogs</div>
    </div>
  )
}

export default NavBar