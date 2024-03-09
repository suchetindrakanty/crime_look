'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "../Magazine/Magazine.css";
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../ModelToShowImage/Model';



const Magzine = () => {
  const [selectedImage, setSelectedImage] = useState('');
  useEffect(()=>{
    AOS.init({duration: 1000, once:true})
  },[])

  const closeModal = () => {
    setSelectedImage('');
  };
  return (
    <div className='magazine-container'>
        <div className="magzine-heading" data-aos="fade-up-left">
          <h1>MAGAZINE</h1>
          <div></div>
        </div>
        <div className='magazine-cover' data-aos="fade-up-right">
          <Image src='/cover.png' className='img' alt='cover image' width={500} height={320} onClick={() => setSelectedImage('cover.png')} />
          <Link href='/magazines' style={{textDecoration: 'none'}}><p className='view-all-magazine'>View All Magazine</p></Link>
        </div>
        {selectedImage.length > 0 && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default Magzine