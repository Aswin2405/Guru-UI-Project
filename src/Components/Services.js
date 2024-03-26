import { motion } from 'framer-motion';
import './Services.css';
import Stats from './Stats';

const services = [
  {
    title: "Design",
    items: ["UI Design", "UX Design", "UX Consultancy", "Design System", "Animation", "Illustrations"],
    color: "#FF6B6B"
  },
  {
    title: "Technology",
    items: ["Web Design", "Softwares", "Mobile Apps", "Web Apps", "Front-End", "Back-End"],
    color: "#5CDB95"
  },
  {
    title: "Business",
    items: ["Branding", "Brand Name", "Brand Guidelines", "Strategy", "Digital Marketing", "S.E.O"],
    color: "#6A9EF6"
  }
];

const Services = () => {
  return (
    <>
    <div className="about-content">
           <div className="text-container">
          <span>OUR SERVICE</span>
          <h2>We provide best business solutions</h2>
          <p>The Team handles the full cylce of mobile and web apps design services. We produce only top-notch applications with great design UI, UX, Navigation and Functionality.</p>
            <div className='service-div'>
      <button className="button primary-button">Get Started</button>
      <button className="button secondary-button">Learn More</button>
    </div>
        </div>
          <img src="https://img.freepik.com/free-vector/mobile-testing-concept-illustration_114360-1564.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais" alt='services' />
        </div>
        <div className="services-header-container">
      <span className="services-header-title">ALL SERVICES</span>
      <h2 className="services-header-subtitle">See all our services</h2>
    </div>
    <div className="services-container">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="service"
          style={{ backgroundColor: service.color }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2>{service.title}</h2>
          <ul>
            {service.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
    <Stats />
    </>
  );
}

export default Services;
