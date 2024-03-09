'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import "../gallery/page.css";
import Modal from '../ModelToShowImage/Model';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MagazineGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        AOS.init({duration: 1000, once:true})
    }, [])


    const closeModal = () => {
      setSelectedImage(null);
  };
  return (
    <div>
    <div className='gallery-container' data-aos="zoom-in">
      {Array(9).fill(0).map((ele,idx)=>{
        return <Image className='img' key={`gallery-image-${idx}`} src={`/GalleryImages/${idx+1}.jpg`} alt='image' width={500} height={200} onClick={() => setSelectedImage(`GalleryImages/${idx+1}.jpg`)} />
      })}
    </div>
    {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default MagazineGallery