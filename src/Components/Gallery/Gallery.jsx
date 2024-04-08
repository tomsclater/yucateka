import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/1.jpg'
import gallery_2 from '../../assets/2.jpg'
import gallery_3 from '../../assets/3.jpg'
import gallery_4 from '../../assets/4.jpg'

const Gallery = () => {
  return (
    <div className="gallery">
        <div className="gallery1">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className="btn dark-btn">
            See more here 🡢
        </button>
    </div>
  )
}

export default Gallery