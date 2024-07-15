import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { SearchIcon } from '../../assets/images/index.img';

// eslint-disable-next-line react/prop-types
const Hero = ({ variant, search, reels }) => {
  const videoRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearchInput = (e) => {
  setSearchValue(e.target.value);
};

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        video.play();
      });
    }
  }, []);

  return (
    <div className='hero'>
      <div className='overlay'></div>
      <video ref={videoRef} loop muted>
        <source src={reels} type='video/mp4' />
      </video>
      <div className='hero__text'>
        <h1>Welcome to Our {variant} </h1>
        <div className='search'>
          <img src={SearchIcon} alt='' />
          <input
            type='text'
            placeholder={search}
            id='hero-text'
            value={searchValue}
            onChange={handleSearchInput}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
