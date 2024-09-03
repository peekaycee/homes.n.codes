/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobile,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.toString(1));

    if (location.hash) {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <footer className='footer'>
      <section className='flex'>
        <div className='box'>
          <Link to='tel:+2348064772024' className='footer-links'>
            <FaMobile className='addressIcon' />
            <span>+234 806 477 2024</span>
          </Link>
          <Link to='tel:+2348102654290' className='footer-links'>
            <FaPhone className='addressIcon' />
            <span>+234 810 265 4290</span>
          </Link>
          <Link to='mailto:homes.n.codes@gmail.com' className='footer-links'>
            <FaEnvelope className='addressIcon' />
            <span>homes.n.codes@gmail.com</span>
          </Link>
          <Link to='contact' className='footer-links'>
            <FaMapMarkerAlt className='addressIcon' />
            <span>Nigeria, Ajah, Lagos</span>
          </Link>
        </div>
        <div className='box'>
          <Link to='/' className='footer-links'>
            <span>Home</span>
          </Link>
          <Link to='/about' className='footer-links'>
            <span>About</span>
          </Link>
          <Link to='/contact' className='footer-links'>
            <span>Contact</span>
          </Link>
          <Link to='/listings' className='footer-links'>
            <span>All Listings</span>
          </Link>
          <Link to='/saved' className='footer-links'>
            <span>Saved Properties</span>
          </Link>
        </div>
        <div className='box'>
          <Link
            to='https://www.facebook.com/'
            target='blank_'
            className='footer-links'>
            <span>Facebook</span>
            <FaFacebook className='socials' id='facebook' />
          </Link>
          <Link
            to='https://www.twitter.com/'
            target='blank_'
            className='footer-links'>
            <span>Twitter</span>
            <FaTwitter className='socials' />
          </Link>
          <Link
            to='https://www.linkedin.com/'
            target='blank_'
            className='footer-links'>
            <span>LinkedIn</span>
            <FaLinkedin className='socials' />
          </Link>
          <Link
            to='https://www.instagram.com/'
            target='blank_'
            className='footer-links'>
            <span>Instagram</span>
            <FaInstagram className='socials' />
          </Link>
          <Link
            to='https://www.whatsapp.com/'
            target='blank_'
            className='footer-links'>
            <span>WhatsApp</span>
            <FaWhatsapp className='socials' />
          </Link>
        </div>
      </section>
      <div className='credit'>
        &copy; Copyright @ 2024 by <span>Homes 'N' Codes Limited</span> | All
        rights reserved!
        <div className='top-btn'>
          <Link to='#'>
            <FaArrowUp className='heartbeat' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
