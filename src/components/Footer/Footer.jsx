import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3 col-sm-12 ">
            <h3>Bazaar</h3>
            <span>@ReactBD.com</span>
            <div className="icons">
              <FaFacebook />
              <FaGithub />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <h3>Located us</h3>
            <span>Damascus</span>
            <span>
              <a href="tel:00963934999036">00963934999036</a>
            </span>
            <span>
              <a href="mailto:ali.shabt96@gmail.com">ali.shabt96@gmail.com</a>
            </span>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <h3>Profile</h3>
            <span>my account</span>
            <span>checkout</span>
            <span>order tracking</span>
            <span>help & support</span>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="sub ">
              <span className="ps-2">e-mail</span>
              <hr />
              <div className="text-center pb-2">subscrips</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
