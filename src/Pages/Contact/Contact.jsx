import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactImage } from '../../assets/images/index.img';
import './Contact.css';
import faqData from './FaqData';

const Contact = () => {
  // Initialize state for active FAQ boxes
  const [activeIndex, setActiveIndex] = useState(null);
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  })

  // Handle click on FAQ heading
  const handleHeadingClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const location = useLocation();

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

  return (
    <>
      <section className='contact' id='top-section'>
        <div className='row'>
          <div className='image'>
            <img
              src={ContactImage}
              alt='Customer Service Attending to A Customer'
            />
          </div>
          <form action='' method='post'>
            <h3>get in touch</h3>
            <input
             ref={inputRef}
              type='text'
              name='name'
              required
              maxLength='50'
              placeholder='enter your name'
              className='box'
            />
            <input
              type='email'
              name='email'
              required
              maxLength='50'
              placeholder='enter your email'
              className='box'
            />
            <input
              type='number'
              name='number'
              required
              maxLength='10'
              max='9999999999'
              min='0'
              placeholder='enter your number'
              className='box'
            />
            <textarea
              name='message'
              placeholder='enter your message'
              required
              maxLength='1000'
              cols='30'
              rows='10'
              className='box'></textarea>
            <input
              type='submit'
              value='send message'
              name='send'
              className='btn'
            />
          </form>
        </div>
      </section>

      <section className='faq' id='faq'>
        <h1 className='heading'>FAQ</h1>
        <div className='box-container'>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`box ${activeIndex === index ? 'active' : ''}`}>
              <h3 onClick={() => handleHeadingClick(index)}>
                <span>{faq.question}</span>
                <i className='fas fa-angle-down'></i>
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
