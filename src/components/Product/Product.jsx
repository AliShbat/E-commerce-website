import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [details, setDetails] = useState([]);
  let [quntity, setQuntity] = useState(1);
  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);
  return (
    <div className="Product container">
      <div className="row">
        <div className="col-lg-7 col-sm-12 left">
          <div className="py-5">
            <img className="fluid" src={details.image} alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 right pb-4 ">
          <div>
            <h2>{details.title}</h2>
          </div>
          <div>
            <span>${details.oldPrice}</span>
            <span style={{"fontSize":"1.5rem"}} className="px-3">${details.price}</span>
          </div>
          <div className="py-4 d-flex ">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <p className="px-2">(I Customer review)</p>
          </div>
          <div className="desc">
            <p>{details.description} </p>
          </div>
          <div className="d-flex py-4">
            <div className="button-click">
              Quntity
              <button
                onClick={() => setQuntity(quntity === 1 ? 1 : quntity - 1)}
                className="px-2"
              >
                {" "}
                -{" "}
              </button>
              {quntity}
              <button onClick={() => setQuntity(quntity + 1)}> + </button>
            </div>
            <div
              onClick={() =>
                dispatch(
                  addToCard({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    quntity: quntity,
                    price: details.price,
                    Oldprice: details.Oldprice,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="px-3 add-to-card"
            >
              add to cart
            </div>
          </div>
          <div>Category: {details.category}</div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Product;
