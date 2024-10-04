import React from 'react'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'
import HeroImage from '../components/HomePageComponents/HeroImage'
import Gallery from '../components/HomePageComponents/Gallery'

const HomePage = () => {
  return (
    <div>
        <HeroImage />
        <NavBar />
        <Gallery />
    </div>
  )
}

export default HomePage