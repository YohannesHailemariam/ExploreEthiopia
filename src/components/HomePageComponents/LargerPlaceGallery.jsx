import React, { useState } from 'react';
import HeroImage from '../../assets/HeroImage.jpg';

const LargerPlaceGallery = ({img, title, description}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Overlay style with height 100% for visibility
    const overlayStyle = {
        width: '315px',
        height: '100%', // Fill the container
        background: 'linear-gradient(rgba(0,0,0,0.6), #ff004f)',
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 40px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#fff',
        transition: 'opacity 0.5s', // Smooth transition for opacity
        opacity: isHovered ? 1 : 0, // Toggle opacity based on hover state
        pointerEvents: isHovered ? 'auto' : 'none', // Allow interaction only when hovered
    };

    return (
        <div 
            className='relative overflow-hidden group'
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
            <img 
                src={img}
                className='w-[300px] h-[400px] rounded-[10px] group-hover:scale-110 transition-transform duration-300'
                alt='image here'
            />
            <div style={overlayStyle}>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default LargerPlaceGallery;
