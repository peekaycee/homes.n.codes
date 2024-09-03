import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SavedProperties = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behaviour: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behaviour: 'smooth' });
    }
  });

  return (
    <div>
      <h1>SavedProperties 1</h1>
    </div>
  );
};

export default SavedProperties;
