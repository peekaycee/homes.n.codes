import { useEffect, useRef } from 'react';
import { JavascriptVid } from '../../assets/videos/videos';
import './Hero.css'

// eslint-disable-next-line react/prop-types
const Hero = ({variant, search}) => {
  const videoRef = useRef(null)
  
  useEffect(()=>{
  const video = videoRef.current;
  if(video) {
    video.addEventListener('loadeddata', ()=>{
      video.play()
    })
  }
}, [])

  return (
    <div className="hero">
      <div className="overlay"></div>
      <video ref={videoRef} loop muted>
        <source src={JavascriptVid} type='video/mp4'/>
      </video>
      <div className="hero__text">
          <h1>Welcome to Our {variant} </h1>
          <p>To help find your perfect choice, filter on what property you require</p>
          <input type="search" placeholder={search} id='hero-text'/>
      </div>
    </div>
  );
};

export default Hero;
