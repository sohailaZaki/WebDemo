import bannerLargeImage from '../../../images/banner-large-image.png'
import bannerLargeImage6 from '../../../images/banner-large-6.jpg'
 import cover from '../../../images/banner-large-image2.jpg'
 import React, { useRef, useEffect } from 'react';
 import './Slider.css'
function Slider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { length } = carouselRef.current.querySelectorAll('.carousel-item');
        const activeIndex = Array.from(carouselRef.current.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
        const nextIndex = (activeIndex + 1) % length;
        carouselRef.current.querySelector(`[data-bs-slide-to="${nextIndex}"]`).click();
      }
    }, 2000); // Change the interval duration as needed (e.g., 5000 milliseconds for 5 seconds)

    return () => clearInterval(intervalId);
  }, []);

    return(
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" ref={carouselRef} style={{ width: '100%', height: '50%', margin: 'auto' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ paddingTop: '20px', margin: 'auto' }}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={bannerLargeImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-center text-white">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bannerLargeImage6} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-center text-white">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cover} className="d-block w-100 h-20" alt="..." style={{ height: '100%' }} />
            <div className="carousel-caption d-none d-md-block text-center text-white">
              <h5>Third slide label</h5>
              <p>Beauty Unleashed: Step into a World of Skincare and Makeup Magic!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;