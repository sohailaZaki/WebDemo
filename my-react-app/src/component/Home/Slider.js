import React, { useRef, useEffect } from 'react';
import './Slider.css'; // Import the CSS file
import bannerLargeImage from '../../images/banner-large-image.png';
import bannerLargeImage6 from '../../images/banner-large-6.jpg';
import cover from '../../images/banner-large-image2.jpg';
import { Carousel, CarouselCaption, Image } from 'react-bootstrap';

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
        }, 1000); // Change the interval duration as needed (e.g., 5000 milliseconds for 5 seconds)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>




<div className="row tu-world">
  <Carousel>
    <Carousel.Item className='carousel-item'>
      <Image
        className="d-block w-100 h-100 "
        src={bannerLargeImage}
        alt="tu world"
        width={1710}
        height={315}
  
        />
        <CarouselCaption className='carousel-caption d-none d-md-block'>
        <h5 style={{color : "white"}} >First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CarouselCaption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <Image
        className="d-block w-100 h-100"
        src={cover}
        alt="hydraulic pumps"
        width={1710}
        height={315}
      />
      <CarouselCaption className='carousel-caption d-none d-md-block'>
      <h5 style={{color : "white"}} >Seconed slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </CarouselCaption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <Image
        className="d-block w-100 h-100"
        src={bannerLargeImage6}
        alt="everything industrial"
        width={1710}
        height={315}
      />
      <CarouselCaption className='carousel-caption d-none d-md-block'>
      <h5 style={{color : "white"}} >Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </CarouselCaption>
    </Carousel.Item>
  </Carousel>
</div>
        </>
    );
}

export default Slider;
