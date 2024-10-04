import React from 'react'
import PlaceGallery from './PlaceGallery'
import LargerPlaceGallery from './LargerPlaceGallery'


const Gallery = () => {
  return (
    <div className='mt-[30px]'>
        <div>
            <Gallery />
            <LargerPlaceGallery />
        </div>
        <div>
            <Gallery />
            <LargerPlaceGallery />
        </div>
        <div>
            <Gallery />
            <LargerPlaceGallery />
        </div>
        <div>
            <Gallery />
            <LargerPlaceGallery />
        </div>
        <div>
            <Gallery />
            <LargerPlaceGallery />
        </div>
    </div>
  )
}

export default Gallery