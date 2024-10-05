import React from 'react'
import AboutUsCard from './AboutUsCard'
import { CiGlobe } from "react-icons/ci";
import { FaPlane } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";

const AboutUsSection = () => {
  return (
    <div className='mt-[40px]'>
        <div className='grid grid-cols-1 place-items-center gap-y-[10px]'>
            <hl className='text-4xl font-semibold'>About Us</hl>
            <p className='text-2xl'>
                Explore the heart of our service, our values, 
                and the community we cherish in the section below.
            </p>
            <div className='grid grid-cols-2 gap-10 mt-5'>
                <AboutUsCard 
                    icon={<CiGlobe />} 
                    title={'Cultural Immersion'} 
                    text={"Dive into Ethiopian's rich cultural heritage, from ancient traditions to vibrant festivals, offering an authentic and unforgettable experience."} 
                    border={"border-blue-500"}
                    textColor={'text-blue-500'}
                />

                <AboutUsCard 
                    icon={<FaMapMarkedAlt />} 
                    title={'Guided Adventures'} 
                    text={"Explore Ethiopia’s breathtaking landscapes with expert guides who will lead you through scenic mountains, valleys, and wildlife reserves."} 
                    border={"border-red-500"}
                    textColor={'text-red-500'}
                />

                <AboutUsCard 
                    icon={<FaPlane />} 
                    title={'Tailored Experiences'} 
                    text={" Customize your journey with personalized travel itineraries that cater to your interests, whether it's history, wildlife, or cuisine."} 
                    border={"border-yellow-500"}
                    textColor={'text-yellow-500'}
                />

                <AboutUsCard 
                    icon={<IoIosLeaf />} 
                    title={'Sustainable Tourism'} 
                    text={"We promote eco-friendly travel to preserve Ethiopia’s natural beauty, ensuring a minimal environmental impact while enriching local communities."} 
                    border={"border-green-500"}
                    textColor={'text-green-500'}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection
