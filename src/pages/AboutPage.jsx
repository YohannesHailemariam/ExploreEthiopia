import React from 'react'
import AboutLandingImage from '../components/AboutPageComponents/AboutLandingImage'
import AboutUsSection from '../components/AboutPageComponents/AboutUsSection'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'

const AboutPage = () => {
  return (
    <div className='font-poppins'>
      <AboutLandingImage />
      <NavBar />
      <AboutUsSection />
      <Footer />
    </div>
  )
}

export default AboutPage