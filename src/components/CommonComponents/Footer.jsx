import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='text-[#5E6282] '>
        <div className={`${darkMode ? 'bg-[#13253D]' : 'bg-[#ECF1F0] '} flex flex-row gap-[150px] p-10`}>
            <div>
                <div className='flex flex-col gap-1'>
                    <p className='w-[300px]'>
                    Join us in touring Ethiopia and finding out new things  
                    as we come to support one another and grow as a community.
                    </p>
                    <p>Address: 123 Software Street, 
                        Tech City, ST 45678
                    </p>
                    <p>Email: contact@companyname.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div>
                <h1 className={`${darkMode ? 'text-white': 'text-black'} text-xl font-medium mb-4`}>Useful Links</h1>
                <div className='flex cursor-pointer flex-col gap-1'>
                    <p>Home</p>
                    <p>About Ethiopia</p>
                    <p>Where to Go</p>
                    <p>Events and Festivals</p>
                    <p>Blog</p>
                </div>
            </div>
            <div>
                <h1 className={`text-xl font-medium ${darkMode ? 'text-white': 'text-black'} mb-4`}>Join Us In</h1>
                <div className='flex flex-col gap-1 cursor-pointer'>
                    <p>Touring</p>
                    <p>Trying</p>
                    <p>Discovering</p>
                    <p>Meeting</p>
                    <p>Going</p>
                </div>
            </div>
            <div>
                <div className='mb-5'>
                    <h1 className={`${darkMode ? 'text-white': 'text-black'} text-xl font-medium mb-5`}>Connect with us</h1>
                    <div className='flex cursor-pointer flex-row gap-5'>
                        <FaFacebook className='text-blue-600 text-4xl'/>
                        <AiFillTwitterCircle className='text-blue-600 text-4xl'/>
                        <FaLinkedin className='text-blue-600 text-4xl'/>
                        <div className='border rounded-md bg-gradient-to-b from-[#4D4ED3] to-[#E0019D] '><IoLogoInstagram className='text-white text-3xl'/></div>
                    </div>
                </div>
                <div>
                    <h1 className={`${darkMode ? 'text-white': 'text-black'} text-xl font-medium text-black mb-4`}>Download Our App</h1>
                    <div className='flex flex-row gap-5'>
                        <div className='border cursor-pointer bg-black rounded-2xl text-white flex flex-row gap-5 p-4'>
                            <FaGooglePlay className='text-3xl'/>
                            <div>
                                <p className='text-xs'>Get it on</p>
                                <p className='text-md'>Play Store</p>
                            </div>
                        </div>
                        <div className='border cursor-pointer bg-black rounded-2xl text-white flex flex-row gap-5 p-4'>
                            <FaApple className='text-3xl'/>
                            <div>
                                <p className='text-xs'>Available on the</p>
                                <p className='text-base'>Apple Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-2 mb-2'>© 2024 Ethiopia Tourism. All rights reserved.</div>
    </div>
  )
}

export default Footer;