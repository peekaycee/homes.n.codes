/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="flex">
        <div className="box">
          <Link to="tel:+2348064772024">
            <i className="fas fa-phone"></i>
            <span>+234 806 477 2024</span>
          </Link>
          <Link to="tel:+2348102654290">
            <i className="fas fa-phone"></i>
            <span>+234 810 265 4290</span>
          </Link>
          <Link to="mailto:homes.n.codes@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>homes.n.codes@gmail.com</span>
          </Link>
          <Link to="contact">
            <i className="fas fa-map-marker-alt"></i>
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
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#">
            <span>Twitter</span>
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#">
            <span>LinkedIn</span>
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="#">
            <span>Instagram</span>
            <i className="fab fa-instagram"></i>
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
