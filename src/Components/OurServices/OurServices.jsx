import  Services  from './serviceData.js'
import './OurServices.css'

const OurServices = () => {
  return (
    <section className="services">
      <h1 className="heading">Our Services</h1>
      <div className="service-box-container">
        {Services.map((service) => (
          <div className="service-box" key={service.id}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
