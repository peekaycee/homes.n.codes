import './faq.css';
import faqData from './FaqData';
import { useState} from 'react';
function Faq() {
      // Initialize state for active FAQ boxes
  const [activeIndex, setActiveIndex] = useState(null);
      // Handle click on FAQ heading
  const handleHeadingClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
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
  )
}

export default Faq
