import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (

    <div>
      <Slider {...settings} className="slider">
        <div>
          <img src="https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?w=2000" alt=''/>
        </div>
        <div>
          <img src="https://as1.ftcdn.net/v2/jpg/02/26/12/54/1000_F_226125493_BqK7H44w4i6M0Uy3U6fv2trLx9umSxUT.jpg" alt=''/>
        </div>
        <div>
          <img src="https://www.premiumwp.com/wp-content/uploads/2013/10/event-themes-featured.jpg" alt=''/>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
