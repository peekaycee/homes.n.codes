import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faPaperPlane, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar nav-1">
        <section className="flex">
          <Link to="/" className="logo">
            <FontAwesomeIcon icon={faHouse}/> HNC
          </Link>
          <ul>
            <li>
              <Link to="post" className='post'>post property <FontAwesomeIcon icon={faPaperPlane} /></Link>
            </li>
          </ul>
        </section>
      </nav>

      <nav className="navbar nav-2">
        <section className="flex">
          <div id="menu-btn" className="fas fa-bars"><FontAwesomeIcon icon={faBars} className='barsIcon'/></div>

          <div className="menu">
            <ul>
              <li>
                <Link to="listings">buy <FontAwesomeIcon icon={faAngleDown} className='icon'/></Link>
                <ul className='dropdown'>
                  <li><Link to="/listings#land-listings">Land</Link></li>
                  <li><Link to="/listings#house-listings">Houses</Link></li>
                  <li><Link to="/listings#flat-listings">Flats</Link></li>
                  <li><Link to="/listings#shop-listings">Shops</Link></li>
                  <li><Link to="/listings#car-listings">Cars</Link></li>
                  <li><Link to="/listings#other-listings">Others</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#">sell <FontAwesomeIcon icon={faAngleDown} className='icon'/></Link>  
                <ul>
                  <li><Link to="#">sell property</Link></li>
                  <li><Link to="dashboard">dashboard</Link></li>
                </ul>
              </li>
              <li>
                <Link to="listings">rent <FontAwesomeIcon icon={faAngleDown} className='icon'/></Link>
                <ul className='dropdown'>
                  <li><Link to="listings#land-listings">land</Link></li>
                  <li><Link to="listings#house-listings">house</Link></li>
                  <li><Link to="listings#flat-listings">flat</Link></li>
                  <li><Link to="listings#shop-listings">shop</Link></li>
                  <li><Link to="listings#car-listings">car</Link></li>
                  <li><Link to="listings#shortlet-listings">shortlet</Link></li>
                  <li><Link to="listings#other-listings">Others</Link></li>
                </ul>
              </li>
              <li>
                <Link to="contact">help <FontAwesomeIcon icon={faAngleDown} className='icon'/></Link>
                <ul>
                  <li><Link to="about">about us</Link></li>
                  <li><Link to="contact">contact us</Link></li>
                  <li><Link to="contact#faq">FAQ</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <Link to="saved">saved <FontAwesomeIcon icon={faHeart} className='saved'/></Link>
            </li>
            <li>
              <Link to="login">account <FontAwesomeIcon icon={faAngleDown} className='icon'/></Link>
              <ul>
                <li><Link to="login">login</Link></li>
                <li><Link to="register">register</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default Header;