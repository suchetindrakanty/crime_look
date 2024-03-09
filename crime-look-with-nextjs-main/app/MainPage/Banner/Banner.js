'use client'
import React, {useEffect} from 'react'
import "../Banner/Banner.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(()=>{
    AOS.init({duration: 300, once: true})
  }, [])

  return (
    <div className='banner-container' data-aos="zoom-in">
        <div className='banner-image' data-aos='flip-left'></div>
        <div className='banner-box'>
          <h1 data-aos='zoom-in'>Crime Look</h1>
          <p className='para-1'>Published from Madhya Pradesh, Uttar Pradesh and Chattisgarh</p>
        <p>National Hindi Monthly Magazine</p>
        </div>
    </div>
  )
}

export default Banner;