'use client'
import Image from 'next/image'
import React, { useEffect } from "react";
import "../contact/page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiBuildingsFill } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div className="contactus-heading" data-aos="fade-up-left">
        <h1>Contact Us</h1>
        <div></div>
      </div>
      <div data-aos="fade-up-right">
        <div className="office-address">
          <div className="office-address-1">
            <PiBuildingsFill className="office-1" />
            <p>
              MP Registered Office: Crime Look B-70, Krishna Appartment, Flat
              No.: 202, Second Floor, Chetak Bridge, Kasturba Nagar, Bhopal,
              Madhya Pradesh-462024
            </p>
          </div>

          <div className="office-address-2">
            <BsBuildings className="office-2" />
            <p>
              CG Registered Office: 39, Shivnath Colony Near Raipur Naka
              Rajnandgaon, Chhattisgarh
            </p>
          </div>
        </div>

        <div className="phone-email">
          <div>
            <MdLocalPhone className="phone" />
            <div>
              <p>0755-4057163</p>
              <p>07744-408661</p>
            </div>
          </div>
          <div>
            <GrMail className="email" />
            <p>_cg@rediffmail.com</p>
          </div>
        </div>

        <div className="crime-look-group-heading">
          <div>
            <h1>Crime Look Group</h1>
            <Image src='/group.png' className='img' alt="group image" width={500} height={100} />
          </div>
        </div>

        <div className="crime-look-group-container">
          <div className="crime-look-group">
            <div className="crime-look-heading">
              <h5>Editor:</h5>
              <h5>Co-Editor:</h5>
            </div>
            <div className="crime-look-para">
              <p>Nawaz Qureshi</p>
              <p>Ashok Verma</p>
            </div>
          </div>
          <div className="crime-look-group">
            <div className="crime-look-heading">
              <h5>Executive Editor:</h5>
              <h5>Managing Editor:</h5>
            </div>
            <div className="crime-look-para">
              <p>Anil Pawar</p>
              <p className="special-para">Rajendra Chawla Chief Executive Delhi</p>
            </div>
          </div>
        </div>

        <div className="bureau-reporter-container">
          <div className="bureau-reporter">
            <div className="bureau-reporter-heading">
              <h5>Bureau Chief:</h5>
            </div>
            <div className="heading-para">
              <h5>Amit Kumar</h5>
              <p>Uttaranchal, Delhi, Bihar, Rajasthan, Kolkata, Haryana</p>
              <h5>Faisal Qureshi</h5>
              <p>Chhattisgarh</p>
              <h5>Riyaz Qureshi</h5>
              <p>Mandla (M.P.)</p>
              <h5>Sandhya Chatterjee</h5>
              <p>Mumbai</p>
              <h5>Rajesh Pratap Singh</h5>
              <p>Satna</p>
              <h5>Santosh Kumar</h5>
            </div>
          </div>
          <div className="crime-look-group">
            <div className="crime-look-heading">
              <h5>Reporter:</h5>
            </div>
            <div className="crime-look-para">
              <p>Vivek Tripathi Correspondent Singrauli</p>
            </div>
          </div>
        </div>

        <div className="crime-look-group-container crime-look-group-container-for-ex-style">
          <div className="crime-look-group">
            <div className="crime-look-heading">
              <h5>Designer:</h5>
            </div>
            <div className="crime-look-para">
              <p>Ramprakash Yadav</p>
            </div>
          </div>
          <div className="crime-look-group">
            <div className="crime-look-heading">
              <h5>legal adviser:</h5>
            </div>
            <div className="crime-look-para">
              <p>Rajesh Vyas &apos;Advocate&apos; (Member- State Bar Council M.P.)</p>
            </div>
          </div>
        </div>

        <div className="crime-look-group-container">
          <div className="crime-look-group">
            <div className="crime-look-heading crime-look-heading-for-ex-style">
              <h5>Assistant Legal Advisor:</h5>
            </div>
            <div className="crime-look-para crime-look-para-for-ex-style">
              <p>Srinivas Dubey</p>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29330.704953872497!2d77.440077!3d23.230780000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42421bc81f83%3A0x6634f1e9bcc08fbd!2sKasturba%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023%2C%20India!5e0!3m2!1sen!2sus!4v1703797429965!5m2!1sen!2sus"
          width="100%"
          height="370"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="bottome-address">
          <p>Rajnandgaon Bureau Office</p>
          <p>Tel: 0744-408661</p>
          <p>First Floor Taka Ghar Complex</p>
          <p>Yes. E. Road Rajnandgaon Chhattisgarh.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
