import React, { useEffect, useState } from "react";
import "../Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const [amount, setAmount] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      return (price += item.price * item.quntity);
    });

    return setAmount(price.toFixed(2));
  }, [productData]);
  return (
    <div>
      <img
        style={{ width: "100%", height: "30vh" }}
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?autocompre"
        alt=""
      />
      {productData.length > 1 ? (
        <div className="cart container py-5">
          <div className="row">
            <div className="col-xl-9 col-lg-12   left">
              <CartItem />
            </div>
            <div className="col-xl-3 col-lg-12 right">
              <div style={{ background: "#fafafa" }} className="right">
                <h3>Cart totals</h3>
                <p>Subtotals ${amount}</p>
                <p>
                  Shipping Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Dolorum, earum. Dolores impedit atque quos.{" "}
                </p>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <p>{amount}</p>
                </div>
                <button className="btn btn-primary w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center container py-5">
          <h4 style={{ color: "red" }}>
            Your Cart is Empty, Please Go Back to shopping and add product to
            Cart
          </h4>
          <Link to="/">
            <span style={{ fontSize: "1.5rem" }}><FaArrowLeft/> go shopping </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
