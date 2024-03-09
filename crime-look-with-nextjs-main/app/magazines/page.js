'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Modal from '../ModelToShowImage/Model';
import "../magazines/page.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MagazineGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        AOS.init({duration: 1000, once: true})
    }, [])

    const closeModal = () => {
      setSelectedImage(null);
  };

  return (
    <div>
    <div className='magazine-gallery-container' data-aos="zoom-in">
    {Array(44).fill(0).map((ele,idx)=>{
        return <Image key={`magazine-image-${idx}`} className='img' src={`/MagazinesImage/${idx+1}.png`} alt='image' width={500} height={350} onClick={() => setSelectedImage(`MagazinesImage/${idx+1}.png`)} />
      })}
    </div>
    {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default MagazineGallery