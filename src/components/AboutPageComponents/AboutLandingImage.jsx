import React from 'react';
import AboutPage from '../../assets/AboutPage.jpg';
import Button from '../CommonComponents/Button';
import { useNavigate } from 'react-router-dom';

const AboutLandingImage = () => {
  
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='relative'>
        <img src={AboutPage} className='w-full h-screen'/>
        <div className='absolute top-[220px] left-[420px] text-white'>
            <p className='text-[90px] font-semibold'>About Ethiopia:</p>
            <p className='text-[20px] font-medium w-[700px]'>
                We specialize in providing unforgettable experiences in Ethiopia, 
                from breathtaking landscapes to rich cultural heritage.
            </p>
            <div className='mt-[30px] flex justify-center'><Button text={'Back To Home'} onClick={goToHomePage}/></div>
        </div>
    </div>
  )
}

export default AboutLandingImage