import { AboutImage, Step1, Step2, Step3 } from '../../assets/images/index.img';
import './About.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import reviews  from './reviewData.js';

const About = () => {
  
  return (
    <>
      <section className='about'>
        <div className='row'>
          <div className='image'>
            <img src={AboutImage}  alt='Red Building with Hands Holding a Key' />
          </div>
          <div className='content'>
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              dolorem provident voluptatum distinctio laborum veritatis vitae
              suscipit praesentium fugiat unde?
            </p>
            <Link to='/contact' className='inline-btn'>
              contact us
            </Link>
          </div>
        </div>
      </section>

      <section className='steps'>
        <h1 className='heading'>3 simple steps</h1>
        <div className='box-container'>
          <div className='box'>
            <img src={Step1} alt='A Search Icon' />
            <h3>search property</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              placeat.
            </p>
          </div>
          <div className='box'>
            <img src={Step2} alt='A Service Provider' />
            <h3>contact agents</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              placeat.
            </p>
          </div>
          <div className='box'>
            <img src={Step3} alt='A Hand Holding a Building' />
            <h3>enjoy property</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              placeat.
            </p>
          </div>
        </div>
      </section>

      <section className='reviews'>
        <h1 className='heading'>Client Reviews</h1>
        <div className='box-container'>
          {reviews.map((review) => (
            <div key={review.id} className='box'>
              <div className='user'>
                <img src={review.image} alt='' />
                <div>
                  <h3>{review.name}</h3>
                  <div className='stars'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                </div>
              </div>
              <p className='comment'>{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

