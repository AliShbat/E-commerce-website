import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import bage from "../../assets/bage.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  var number  = productData.length
  const [click, setClick] = useState(" ");
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div className="header  sticky-top">
      <div className="container d-flex justify-content-between py-3 relative ">
        <div>
          <Link to="/">
            <h3>Bazaar</h3>
          </Link>
        </div>
        <div className="d-flex justify-content-between  ">
          <div onClick={handelClick}>
            {click ? (
              <span>
                <FaBars />
                {}
              </span>
            ) : (
              <span>
                <FaTimes />
              </span>
            )}
          </div>
          <div>
            <ul className={click ? " layout active" : "layout"}>
              <li>Home</li>
              <li>Pages</li>
              <li>Shop</li>
              <li>Element</li>
              <li>Blog</li>
              <img  src={bage} alt="" />
              <Link to="/Cart">
                <p className="number ">{number}</p>
              </Link>
            </ul>
            {/*-------------design number bars--------- */}
            <div className="number-layout">
              {productData.length >= 1 ? <div>{productData.length} </div> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
