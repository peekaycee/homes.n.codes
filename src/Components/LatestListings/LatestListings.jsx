import './LatestListings.css';
import { Link } from 'react-router-dom';
import Listings from './ListingsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faBed, faBath, faMaximize } from '@fortawesome/free-solid-svg-icons';

const LatestListings = () => {
  return (
    <section className='listings'>
      <h1 className='heading'>Latest Listings</h1>
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
                <FontAwesomeIcon icon={faImage} className='regular-icon icon' />
                <span>{listing.totalNumberOfImages}</span>
              </p>
              <p className='type'>
                <span>{listing.type}</span>
                <span>{listing.category}</span>
              </p>
              <form action='' method='post' className='save'>
                <button
                  type='submit'
                  title='save'
                  name='save'
                  className='faHeart'>
                  <FontAwesomeIcon icon={faHeart} className='regular-icon icon' />
                  Save
                </button>
              </form>
              <img src={listing.image} alt='Image of a House' />
            </div>
            <h3 className='name'>{listing.description}</h3>
            <p className='location'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='solid-icon' />
              <span>{listing.location}</span>
            </p>
            <div className='flex'>
              <p>
              <FontAwesomeIcon icon={faBed} className='solid-icon' />
                <span>{listing.numberOfBedrooms}</span>
              </p>
              <p>
              <FontAwesomeIcon icon={faBath} className='solid-icon' />
                <span>{listing.numberOfBathrooms}</span>
              </p>
              <p>
              <FontAwesomeIcon icon={faMaximize} className='solid-icon' />
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
        <Link to='/listings' className='inline-btn'>
          View All
        </Link>
      </div>
    </section>
  );
};

export default LatestListings;
