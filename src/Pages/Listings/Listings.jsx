import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Cars,
  Flats,
  Houses,
  Lands,
  Others,
  Outlets,
  Shops,
  ViewProperty,
} from '../../Components/common/index.common';
import './Listings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Hero from '../../Components/Hero/Hero';

const Listings = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const location = useLocation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const ListHeader = document.querySelector('#root > div.listings > section.house-listings > section > h1');
    const viewAllBtn = document.querySelector('.inline-btn');

    if (ListHeader) ListHeader.style.display = 'none';
    if (viewAllBtn) viewAllBtn.style.display = 'none';
  }, [activeComponent]);

  const handleSetActiveComponent = (componentName) => {
    setActiveComponent(componentName);
    if (componentName !== null) {
      const element = document.getElementById(`${componentName}-listings`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    restoreNavState();
  };

  const scrollCarousel = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setIsScrolled(scrollHeight > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const restoreNavState = () => {
    const nav2 = document.querySelector('.nav-2');
    const header = document.querySelector('.header');
    if (nav2) {
      nav2.style.opacity = '1';
      nav2.style.pointerEvents = 'auto';
      nav2.style.zIndex = '1';
    }
    if (header) {
      header.style.zIndex = '2';
    }
  };

  useEffect(() => {
    const nav2 = document.querySelector('.nav-2');
    const header = document.querySelector('.header');
    if (nav2) {
      nav2.style.opacity = isScrolled ? '0' : '1';
      nav2.style.pointerEvents = isScrolled ? 'none' : 'auto';
      nav2.style.zIndex = isScrolled ? '3' : '1';
    }
    if (header) {
      header.style.zIndex = isScrolled ? '1' : '2';
    }

    const handleClickOutside = (event) => {
      if (nav2 && !nav2.contains(event.target)) {
        restoreNavState();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isScrolled]);

  useEffect(() => {
    return () => {
      restoreNavState(); // Restore nav state when Listings component unmounts
    };
  }, []);

  return (
    <>
      <div className='carousel-container'>
        <div className='carousel' ref={carouselRef}>
          <div className='carousel-items'>
            <div className='navigation'>
              <button
                className='nav-button-left'
                onClick={() => scrollCarousel(-300)}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Lands')}>
                Lands
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Houses')}>
                Houses
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Flats')}>
                Flats
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Shops')}>
                Shops
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Cars')}>
                Cars
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Outlets')}>
                Outlets
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent('Others')}>
                Others
              </Link>
            </div>
            <div className='carousel-item'>
              <Link to='#' onClick={() => handleSetActiveComponent(null)}>
                View All
              </Link>
            </div>
            <div className='navigation right'>
              <button
                className='nav-button-right'
                onClick={() => scrollCarousel(300)}>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='listings'>
        {activeComponent === null && (
          <>
            <Hero variant={'Top Level'} search={'seach for property Type'} />
            <Lands id='land-listings' />
            <Houses
              houseType1={'Bungalow'}
              houseType2={'Duplexes'}
              id='house-listings'
            />
            <Flats id='flat-listings' />
            <Cars id='car-listings' />
            <Shops id='shop-listings' />
            <Outlets id='outlet-listings' />
            <Others id='other-listings' />
            <ViewProperty />
          </>
        )}
       {activeComponent === 'Lands' && (<><Hero variant={'Land Properties'} search={'seach for land types'} /> <Lands /></>)}
        {activeComponent === 'Houses' && (<><Hero variant={'Housing Properties'} search={'seach for house types'}  /><Houses/></>)}
        {activeComponent === 'Flats' && (<><Hero variant={'Flats and Rented Properties'} search={'seach for flat types'} /><Flats /></>)}
        {activeComponent === 'Cars' && (<><Hero variant={'Cars for Purchase'} search={'seach for car types'} /><Cars /></>)}
        {activeComponent === 'Shops' && (<><Hero variant={'Rent Your Shops'} search={'seach for shop types'} /><Shops /></>)}
        {activeComponent === 'Outlets' && (<><Hero  variant={'Outlets Locations'} search={'seach for outlet locations'} /><Outlets /></>)}
        {activeComponent === 'Others' && (<><Hero variant={'Other Properties You May Need'} search={'seach for other properties'} /><Others /></>)}
        {activeComponent === 'ViewProperty' && <ViewProperty />}
      </div>
      <div className='bottom-navigation'>
        <button
          className='view-all'
          onClick={() => handleSetActiveComponent(null)}>
          View All
        </button>
      </div>
    </>
  );
};

export default Listings;