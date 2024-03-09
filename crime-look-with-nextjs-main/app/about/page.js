'use client'
import React, { useEffect } from "react";
import "../about/page.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(()=>{
        AOS.init({duration: 1000,once:true})
    },[])
  return (
    <div>
      <div className="about-heading" data-aos="fade-up-left">
        <h1>Purpose of publishing Crimelook magazine</h1>
        <div></div>
      </div>
      <div className="about-para-container" data-aos="zoom-in-up">
        <p>
          {/* Replace '&#39;' with '&apos;' */}
          To expose the corruption spread in the society, so that a clean
          environment can be created in the society. The aim of the magazine is
          not to be commercial but to provide right direction and cleanliness to
          the society. The magazine is not the voice of any community, party,
          individual or sect but rather elevates the voice of the society. Any
          person without bias can convey his problem or suggestion to the
          general public through the magazine. There is no attempt to suppress
          any person&apos;s voice. Crime Look is generally considered to be a
          magazine that exposes news related to crimes of murder, robbery and
          rape. Whereas the magazine is also committed to creating public
          awareness against these crimes by highlighting political, social and
          economic crimes. Apart from this, its readers are also made aware of
          the decisions given by the courts in various crimes, so that the
          readers can become familiar with the laws and decisions of the courts.
          The main objective of the magazine is to expose the corruption
          prevalent in the system, and not to run a campaign against any
          particular person.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
