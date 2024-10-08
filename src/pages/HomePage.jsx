import React from 'react'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'
import HeroImage from '../components/HomePageComponents/HeroImage'
import Gallery from '../components/HomePageComponents/Gallery'

const HomePage = () => {
  return (
    <div className='font-poppins'>
        <HeroImage />
        <NavBar />
        <Gallery />
        <Footer />
    </div>
  )
}

export default HomePage