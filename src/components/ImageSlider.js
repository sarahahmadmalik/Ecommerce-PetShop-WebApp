import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageSlider.css';



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
    
      </div>
     
    </Slider>
  );
};

export default ImageSlider;