import React, {useState} from 'react'

const AboutUsCard = ({icon, title, text, textColor, border}) => {

  return (
        <div className='border pl-3 pr-10 py-5 w-fit shadow-sm rounded-xl flex flex-row gap-10 bg-white'>
        <div className={`border p-5 ${border} ${textColor} w-fit rounded-full`}>
            <div className='text-6xl'>
                {icon}
            </div>
        </div>
        <div>
            <h1 className='text-xl font-medium mb-1'>{title}</h1>
            <h2 className='w-[450px]'>{text}</h2>
        </div>
    </div>
  )
}

export default AboutUsCard;