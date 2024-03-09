'use client'
import Image from 'next/image'
import React, {useEffect} from "react";
import "../davp-rni/page.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DAVP_RNI = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    <div>
      <div className="davp_rni-container">
        <div className="davp_rni">
          {/* <h1>RNI Letter Issued By Goverment Of India</h1> */}
          <div className="davp_rni-heading" data-aos="fade-up-left">
            <h1>RNI Letter Issued By Goverment Of India</h1>
            <div></div>
          </div>
          <div className="davp-rni-image-container">
          <Image src='/RNI-1.png' className='img' alt="RNI-image" width={500} height={1500} data-aos="fade-up-right" />
          </div>
        </div>

        <div className="davp_rni">
          {/* <h1>RNI Letter Issued By Goverment Of India</h1> */}
          <div className="davp_rni-heading" data-aos="fade-up-left">
            <h1>RNI Letter Issued By Goverment Of India</h1>
            <div></div>
          </div>
          <div className="davp-rni-image-container davp_rni-image2">
          <Image src='/RNI-2.png' className='img' width={500} height={1500} alt="RNI-image" data-aos="fade-up-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAVP_RNI;
