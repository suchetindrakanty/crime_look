'use client'
import React, { useEffect, useState } from 'react';
import '../ModelToShowImage/Model.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Modal = ({ image, closeModal }) => {
    useEffect(()=>{
        AOS.init({duration:1000, once:true})
    },[])
    
    return (
        <div className="modal-overlay">
            <div className='model-container' data-aos="zoom-in">
                <span className="close-btn" onClick={closeModal}>×</span>
                <TransformWrapper>
                    <TransformComponent>
                    <img 
                    src={image} 
                    alt="enlarged"
                    className="modal-image" 
                />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
};

export default Modal;