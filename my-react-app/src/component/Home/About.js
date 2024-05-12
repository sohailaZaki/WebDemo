import React from 'react';
import './About.css'; // Import your CSS file for the AboutPage styles
import skincareImage from '../../images/single-image2.jpg'; // Import your skincare image
import makeupImage from '../../images/category-banner-1.jpg'; // Import your makeup image
import Footer from '../footer/footer';
const AboutPage = () => {
  return (
    <div className="about-container">
    <h2 className="about-heading">About Us</h2>
    <div className="about-info">
      <div className="about-card">
        <img src={skincareImage} alt="Skincare" className="about-image" />
        <div className="about-overlay">
          <div className="about-text">
            <h3 className="about-title">Our Skincare Story</h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className="about-card">
        <img src={makeupImage} alt="Makeup" className="about-image" />
        <div className="about-overlay">
          <div className="about-text">
            <h3 className="about-title">Our Makeup Philosophy</h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={skincareImage} alt="Team Member 1" className="team-member-image" />
          <h3 className="team-member-name">John Doe</h3>
          <p className="team-member-role">CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src={makeupImage} alt="Team Member 2" className="team-member-image" />
          <h3 className="team-member-name">Jane Smith</h3>
          <p className="team-member-role">Marketing Director</p>
        </div>
      </div>
    </section>

    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-form">
       <Footer/>
      </div>
    </section>
  </div>
);
};
export default AboutPage;
