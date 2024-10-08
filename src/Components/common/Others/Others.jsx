import { useState, useEffect } from 'react';
import Listings from './OtherPropertyData'
import '../../LatestListings/LatestListings.css'
import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaExpand, FaImage, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';



// eslint-disable-next-line react/prop-types
const Others = () => {
  const [isLinkClicked, setIsLinkClicked] = useState(true);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const clickableLink = document.querySelector('#root > div.carousel-container > div > div > div:nth-child(8) > a');
      if (clickableLink && clickableLink.contains(event.target)) {
        setIsLinkClicked(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (   
    <section  id='other-listings' >
    {isLinkClicked && <h2>Other Properties</h2>}
    <section className='Other-listings'>
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
              <form action='' method='post' className='save' id='other-properties-form'>
                <button
                  type='submit'
                  title='save'
                  name='save'
                  className='faHeart'>
                  <FaRegHeart className='regular-icon icon' />
                  Save
                </button>
              </form>
              <img src={listing.image} alt='Image of a Others' />
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

export default Others;
