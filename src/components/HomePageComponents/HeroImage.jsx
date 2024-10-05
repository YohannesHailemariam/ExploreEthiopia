import React from 'react';
import HeroImagee from '../../assets/HeroImage.jpg';
import Button from '../CommonComponents/Button';
import { useNavigate } from 'react-router-dom';

const HeroImage = () => {
  
  const navigate = useNavigate();
  const goToAboutPage = () => {
    navigate('/about');
  };

  return (
    <div className='relative'>
        <img src={HeroImagee} className='w-full h-screen'/>
        <div className='absolute top-[220px] left-[370px] text-white'>
            <p className='text-[90px] font-semibold'>Explore Ethiopia:</p>
            <p className='text-[20px] font-medium w-[760px]'>Discover a land of ancient history, stunning landscapes, 
               and vibrant culture. From the majestic peaks of the 
               Simien Mountains to the timeless rock-hewn churches of Lalibela,
               Ethiopia offers a journey like no other.
            </p>
            <div className='mt-[30px] flex justify-center'><Button text={'Learn More'} onClick={goToAboutPage}/></div>
        </div>
    </div>
  )
}

export default HeroImage