'use client'
import "../Footer/Footer.css";
import Link from 'next/link'
import { CiLinkedin, CiFacebook, } from "react-icons/ci";
import { PiGoogleLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <li><span>Support</span></li>
            <li><Link className="link" style={{textDecoration: 'none'}} href="https://crimelook.in/">
              Crime look
            </Link>
            </li>

            <li><Link className="link" style={{textDecoration: 'none'}} href='https://springstrategies.in/'>
              Spring S Technology
            </Link>
            </li>

            <li><Link className="link" style={{textDecoration: 'none'}} href='#'>
              Centenarian
            </Link>
            </li>

          </ul>
        </div>
        <div className="footer-content important-link">
          <ul>
            <li><span>Important links</span></li>
            <li><Link className="link" style={{textDecoration: 'none'}} href='https://www.aajtak.in/'>
              Aaj Tak
            </Link>
            </li>

            <li><Link className="link" style={{textDecoration: 'none'}} href='https://www.bhaskar.com/'>
              Dainik Bhaskar
            </Link>
            </li>

            <li><Link className="link" style={{textDecoration: 'none'}} href='https://crimelook.in'>
              Crime look
            </Link>
            </li>

          </ul>
        </div>
        <div className="footer-content socialmedia">
          <ul>
            <li><span>Social media</span></li>
            <div className="socialmedia-icon">
                <li>
                  <Link className="link" href='https://www.facebook.com/SpringSTechnologies/'><CiFacebook className='footer-icons' size={35} /></Link>
                </li>
                <li>
                  <Link className="link" href='https://www.linkedin.com/in/springstech/'><CiLinkedin className='footer-icons' size={35} /></Link>
                </li>
                <li>
                <Link className="link" href='https://www.springstrategies.in/'><PiGoogleLogoLight className='footer-icons' size={35} /></Link>
                </li>
            </div>
          </ul>
        </div>

        <div className="footer-content privacy">
          <ul>
            <li><span>Privacy Policy</span></li>
            <li>
              All rights of this website are reserved, copying any part is a
              crime!
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <div>
          <span>Copyright © 2013</span>
          <Link className='link' href="https://crimelook.in/">Crime Look</Link>
        </div>
        <div>
          <span>Designed & Maintained by</span>
          <Link className='link' href="https://springstrategies.in">
            SPRING S TECHNOLOGIES | ISO 9001:2008
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
