'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SwiperCore from 'swiper'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import "../Carousel/Carousel.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import Modal from "../../ModelToShowImage/Model";



export default function Carousel() {
  SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(()=>{
    AOS.init({duration: 300, once: true})
  }, [])

  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <>
      <Swiper data-aos="zoom-in"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {Array(14).fill(0).map((ele,idx)=>{
          return (<SwiperSlide key={`slide-${idx}`}>
          <Image data-aos='flip-left' className='img' src={`/CarouselImage/${idx+1}.jpg`} alt="crime books" width={500} height={300} onClick={() => setSelectedImage(`CarouselImage/${idx+1}.jpg`)}/>
        </SwiperSlide>)  
        })}
      </Swiper>
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </>
  );
}