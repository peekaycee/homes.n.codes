import './Hero.css'

// eslint-disable-next-line react/prop-types
const Hero = ({variant, search}) => {
  return (
    <div className="hero">
      <h1>Welcome to Our {variant} </h1>
      <input type="search" placeholder={search} />
    </div>
  );
};

export default Hero;
