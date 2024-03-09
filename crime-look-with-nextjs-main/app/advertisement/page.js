'use client'
import Image from 'next/image'
import React, {useEffect} from "react";
import "../advertisement/page.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const AdvertisementRate = () => {
  useEffect(()=>{
    AOS.init({duration: 1000, once: true})
  },[])
  return (
    <div>
      <div>
        <div className="advertisement-heading" data-aos="fade-up-left">
        <h1>Terrif for Magzine Advertisements</h1>
        <div></div>
      </div>
      <div className="advertisement-container">
        <table data-aos="fade-up-right">
          <tr className="table-row table-heading-row">
            <th className="table-heading">PAGE</th>
            <th className="table-heading">SIDE</th>
            <th className="table-heading">COLOUR</th>
            <th className="table-heading">B & W</th>
          </tr>
          <tr className="table-row">
            <td className="table-d">Front Full</td>
            <td className="table-d">Inner</td>
            <td className="table-d">Rs. 10,000/-</td>
            <td className="table-d">5,000/-</td>
          </tr>
          <tr className="table-row">
            <td className="table-d">Back Full</td>
            <td className="table-d">Main</td>
            <td className="table-d">Rs. 25,000/-</td>
            <td className="table-d">15,000/-</td>
          </tr>
          <tr className="table-row">
            <td className="table-d">Back Full</td>
            <td className="table-d">Inner</td>
            <td className="table-d">Rs. 12,000/-</td>
            <td className="table-d">6,000/-</td>
          </tr>
        </table>

        <table data-aos="fade-up-left">
          <tr className="table-row table-heading-row">
            <th className="table-heading">MIDDLE PAGE</th>
            <th className="table-heading">COLOURED</th>
            <th className="table-heading">MIDDLE PAGE</th>
            <th className="table-heading">B & W</th>
          </tr>
          <tr className="table-row">
            <td className="table-d">Double</td>
            <td className="table-d">
              <tr className="full-half full-half-heading">
                <td className="full full-bold">Full</td>
                <td className="half half-bold">Half</td>
              </tr>
            </td>
            <td className="table-d">Double</td>
            <td className="table-d">
              <tr className="full-half full-half-heading">
                <td className="full full-bold">Full</td>
                <td className="half half-bold">Half</td>
              </tr>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-d">15,000/-</td>
            <td className="table-d">
              <tr className="full-half">
                <td className="full">5,000/-</td>
                <td className="half">3000/-</td>
              </tr>
            </td>
            <td className="table-d">10,000/-</td>
            <td className="table-d">
              <tr className="full-half">
                <td className="full">4,000/-</td>
                <td className="half">2000/-</td>
              </tr>
            </td>
          </tr>
        </table>

        <table data-aos="fade-up-right">
          <tr className="table-row table-heading-row">
            <th className="table-heading">1, INCH STRIP</th>
            <th className="table-heading"></th>
            <th className="table-heading">DETAILS PAGE PANEL</th>
          </tr>
          <tr className="table-row">
            <td className="table-data table-d">Coloured</td>
            <td className="table-data table-d">B &amp; W</td>
            <td className="table-data table-d">Coloured(2&ldquo; X 2&rdquo;)</td>
          </tr>
          <tr className="table-row">
            <td className="table-d">3,000/-</td>
            <td className="table-d">1500/-</td>
            <td className="table-d">3000/-</td>
          </tr>
        </table>
        <div className="advertisement-image-container" data-aos="fade-up-left">
        <Image className='img' src='/advertisement.jpg' width={500} height={1200} alt='advertisementRate' />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdvertisementRate;
