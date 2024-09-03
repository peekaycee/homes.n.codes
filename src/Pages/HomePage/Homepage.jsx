import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FeedbackForm from '../../Components/Feedback/FeedbackForm';
import LatestListings from '../../Components/LatestListings/LatestListings';
import OurServices from '../../Components/OurServices/OurServices';
import './Homepage.css';

const Homepage = () => {
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
    <main>
      <div className='home'>
        <div className='home__overlay'></div>
        <section className='center'>
          <FeedbackForm />
        </section>
      </div>
      <OurServices />
      <LatestListings />
      <Outlet />
    </main>
  );
};

export default Homepage;
