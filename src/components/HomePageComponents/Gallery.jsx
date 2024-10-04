import React from 'react'
import PlaceGallery from './PlaceGallery'
import LargerPlaceGallery from './LargerPlaceGallery'
import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'
import Image5 from '../../assets/Image5.jpg'
import Image6 from '../../assets/Image6.jpg'
import Image7 from '../../assets/Image7.jpg'
import Image8 from '../../assets/Image8.jpg'

const Gallery = () => {
  return (
    <div className='mt-[30px] grid grid-cols-4'>
        <div className='grid grid-cols-1 gap-5'>
            <PlaceGallery 
            img={Image1} 
            title={'Lalibela'} 
            description={'Lalibela, a UNESCO World Heritage Site in Ethiopia, is renowned for its 12th-century rock-hewn churches, carved entirely from ston'}
            />

            <LargerPlaceGallery 
            img={Image5}
            title={'Simien Mountains'}
            description={'The Simien Mountains, a UNESCO World Heritage Site, offer breathtaking views and challenging hikes. Home to unique wildlife, including the Gelada baboon, this stunning landscape provides a perfect blend of adventure and natural beauty.'}/>
        </div>
        <div className='grid grid-cols-1 gap-5'>
            <LargerPlaceGallery 
            img={Image6}
            title={'Addis Ababa'}
            description={'Addis Ababa, the capital of Ethiopia, is a bustling city rich in culture and history. Explore the National Museum, home to the famous fossilized remains of Lucy, and indulge in traditional Ethiopian cuisine in the lively Merkato market.'}
            />

            <PlaceGallery 
            img={Image2}
            title={'Gondar'}
            description={'Known as the "Camelot of Africa," Gondar is famous for its medieval castles and churches.'}/>
        </div>
        <div className='grid grid-cols-1 gap-5'>
            <PlaceGallery 
            img={Image3}
            title={'Axum'}
            description={'Axum, a city of ancient obelisks and ruins, was once the center of the Aksumite Empire.'}/>
            <LargerPlaceGallery 
            img={Image7}
            title={'Omo Valley'}
            description={'The Omo Valley is known for its diverse tribes and vibrant cultures. Visitors can engage with the unique traditions of the Hamar, Mursi, and Karo people, experiencing their colorful ceremonies and stunning traditional attire.'}
            />
        </div>
        <div className='grid grid-cols-1 gap-5'>
            <LargerPlaceGallery 
            img={Image8}
            title={'Bale Mountains'}
            description={'The Bale Mountains National Park is a haven for wildlife enthusiasts, featuring unique ecosystems and rare species like the Ethiopian wolf. Hike through breathtaking landscapes, from alpine meadows to lush forests, while immersing yourself in the park.'}
            />

            <PlaceGallery 
            img={Image4}
            title={'Lake Tana'}
            description={'Lake Tana, the largest lake in Ethiopia, is dotted with ancient monasteries on its islands. '}
            />
        </div>
    </div>
  )
}

export default Gallery