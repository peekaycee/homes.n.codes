/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="flex">
        <div className="box">
          <Link to="tel:+2348064772024">
            <FontAwesomeIcon icon={faPhone} className='addressIcon'/>
            <span>+234 806 477 2024</span>
          </Link>
          <Link to="tel:+2348102654290">
            <FontAwesomeIcon icon={faPhone} className='addressIcon'/>
            <span>+234 810 265 4290</span>
          </Link>
          <Link to="mailto:homes.n.codes@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className='addressIcon'/>
            <span>homes.n.codes@gmail.com</span>
          </Link>
          <Link to="contact">
            <FontAwesomeIcon icon={faMapMarkerAlt} className='addressIcon'/>
            <span>Nigeria, Ajah, Lagos</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="about">
            <span>About</span>
          </Link>
          <Link to="contact">
            <span>Contact</span>
          </Link>
          <Link to="listings">
            <span>All Listings</span>
          </Link>
          <Link to="saved">
            <span>Saved Properties</span>
          </Link>
        </div>
        <div className="box">
          <Link to="#">
            <span>Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className='socials' id='facebook' />
          </Link>
          <Link to="#">
            <span>Twitter</span>
            <FontAwesomeIcon icon={faTwitter} className='socials'/>
          </Link>
          <Link to="#">
            <span>LinkedIn</span>
            <FontAwesomeIcon icon={faLinkedin} className='socials'/>
          </Link>
          <Link to="#">
            <span>Instagram</span>
            <FontAwesomeIcon icon={faInstagram} className='socials'/>
          </Link>
        </div>
      </section>
      <div className="credit">
        &copy; Copyright @ 2024 by <span>Homes 'N' Codes Limited</span> | All
        rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
