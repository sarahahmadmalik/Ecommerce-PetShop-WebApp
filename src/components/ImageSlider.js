import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageSlider.css';
import slider1 from '../assets/slider1.png' 
import slider2 from '../assets/slider2.png' 
import slider3 from '../assets/slider3.png' 
import slider4 from '../assets/slider4.png' 
import slider5 from '../assets/slider5.png' // Create this file for custom styling

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    className: 'image-slider',
    dotsClass: 'slick-dots',
  };

  return (
    <Slider {...settings}>

      <div>
        <img src={slider3} alt="carousal-img  3" />
      </div>
     
    </Slider>
  );
};

export default ImageSlider;