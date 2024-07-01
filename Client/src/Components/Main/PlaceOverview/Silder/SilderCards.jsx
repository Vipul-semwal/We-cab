import React from "react";
import "./SilderCards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3 seconds
  responsive: [
    {
      breakpoint: 1024, // large screens
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 768, // medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 480, // small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};

function SilderCards() {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src="/Utility/card1.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
        <div className="slider-item">
          <img src="/Utility/card2.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
        <div className="slider-item">
          <img src="/Utility/card3.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
        <div className="slider-item">
          <img src="/Utility/card1.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
        <div className="slider-item">
          <img src="/Utility/card1.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
        <div className="slider-item">
          <img src="/Utility/card1.png" className="cardImg" alt="" />
          <h3>The Grand Palace</h3>
          <p>Bangkok</p>
        </div>
      </Slider>
    </div>
  );
}

export default SilderCards;
