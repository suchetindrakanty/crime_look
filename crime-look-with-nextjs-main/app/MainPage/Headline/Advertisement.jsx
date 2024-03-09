'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import '../Headline/Headline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Modal from '../../ModelToShowImage/Model';

const AdvertisementCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    useEffect(()=>{
        AOS.init({duration: 1000, once: true})
    },[])

    const closeModal = () => {
      setSelectedImage(null);
  };
  return (
    <>
    <div className="advertisement-card" data-aos="fade-left"
    data-aos-anchor-placement="center-center">
      <h2>Advertisement</h2>
      <Image src='/advertisement.png' className='img' alt='advertisement' width={500} height={600} onClick={() => setSelectedImage('advertisement.png')} />
    </div>
    {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </>
  );
};

export default AdvertisementCard;