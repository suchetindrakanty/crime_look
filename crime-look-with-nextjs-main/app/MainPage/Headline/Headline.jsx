'use client'
import React from "react";
import "../Headline/Headline.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Advertisement from "../Headline/Advertisement";

const Headline = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, once: true})
    },[])
  return (
    <div className="headline-container">
      
      <div className="headline" data-aos="zoom-in">
        <div className="headline-heading">
          <h1>HeadLines</h1>
          <div></div>
        </div>
        <ol>
          <li data-aos="flip-right">
            The image of departmental minister Smt. Yashodhara Raje Scindia is
            getting tarnished due to the arbitrariness of officials of Madhya
            Pradesh Sports and Youth Welfare Department.
          </li>

          <li>Chhattisgarh government&apos;s budget 2018, not new taxes</li>
          <li>The image of UP Police has improved in the country: Yogi</li>
          <li>Old and today. Difference between a dacoit and a dacoit</li>
          <li>
            Fear of opposition from the upper class and employee unions, Supreme
            Court order becomes a noose for BJP in Maharashtra
          </li>
          <li>If two adults are getting married, the third cannot interfere</li>
          <li>
            Supreme Court order before 2005 If a daughter is born, she will have
            a share in the ancestral property.
          </li>
          <li>
            Supreme Court orders that courts should rely on electronic evidence
            even without certificate.
          </li>
          <li>
            Hunger is a serious problem in India. Niti Aayog said the situation
            is better.
          </li>
          <li>
            Social and digital media will decide the market trend. And the
            stream of politics - Atul Malikram
          </li>
          
        </ol>
    
      </div>
      <Advertisement />
      
    </div>
  );
};

export default Headline;
