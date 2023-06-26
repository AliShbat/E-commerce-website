import "./Banner.css";
import imag1 from "../../assets/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg";
import imag2 from "../../assets/aviv-rachmadian-7F7kEHj72MQ-unsplash.jpg";
import imag3 from "../../assets/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="Banner">
      <div className="">
        <Slider {...settings}>
          <div>
            <img className="img-fluid" src={imag1} alt="rr" />
          </div>
          <div>
            <img className="img-fluid" src={imag2} alt="rr" />
          </div>
          <div>
            <img className="img-fluid" src={imag3} alt="rr" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
