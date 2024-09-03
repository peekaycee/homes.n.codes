import { useState, useEffect } from 'react';
import Listings from './HouseData';
import '../../LatestListings/LatestListings.css';
import { Link } from 'react-router-dom';
import {
  FaBath,
  FaBed,
  FaRegHeart,
  FaImage,
  FaMapMarkerAlt,
  FaExpand,
} from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Houses = () => {
  const [isLinkClicked, setIsLinkClicked] = useState(true);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const clickableLink = document.querySelector(
        '#root > div.carousel-container > div > div > div:nth-child(3) > a'
      );
      if (clickableLink && clickableLink.contains(event.target)) {
        setIsLinkClicked(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <section id='house-listings'>
      {isLinkClicked && <h2>Available Houses</h2>}
      <section className='house-listings'>
        <div className='box-container'>
          {Listings.map((listing, index) => (
            <div className='box' key={`${listing.id}-${index}`}>
              <div className='admin'>
                <h3>{listing.alpha}</h3>
                <div>
                  <p>{listing.name}</p>
                  <span>{listing.date}</span>
                </div>
              </div>
              <div className='thumb'>
                <p className='total-images'>
                  <FaImage className='regular-icon icon' />
                  <span>{listing.totalNumberOfImages}</span>
                </p>
                <p className='type'>
                  <span>{listing.type}</span>
                  <span>{listing.category}</span>
                </p>
                <form action='' method='post' className='save' id='house-form'>
                  <button
                    type='submit'
                    title='save'
                    name='save'
                    className='faHeart'>
                    <FaRegHeart className='regular-icon icon' />
                    Save
                  </button>
                </form>
                <img src={listing.image} alt='Image of a House' />
              </div>
              <h3 className='name'>{listing.description}</h3>
              <p className='location'>
                <FaMapMarkerAlt className='solid-icon' />
                <span>{listing.location}</span>
              </p>
              <div className='flex'>
                <p>
                  <FaBed className='solid-icon' />
                  <span>{listing.numberOfBedrooms}</span>
                </p>
                <p>
                  <FaBath className='solid-icon' />
                  <span>{listing.numberOfBathrooms}</span>
                </p>
                <p>
                  <FaExpand className='solid-icon' />
                  <span>{listing.size}sqft</span>
                </p>
              </div>
              <Link to={`/listings/${listing.id}`} className='btn'>
                View Property
              </Link>
            </div>
          ))}
        </div>
        <div className='listings-added'>
          {/* <Link to='/listings' className='inline-btn'>
          View All
        </Link> */}
        </div>
      </section>
    </section>
  );
};

export default Houses;
