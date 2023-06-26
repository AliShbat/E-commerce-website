import "./CartItem.css";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementquntity,
  incrementquntity,
  removeCart,
  resetCart,
} from "../../redux/bazaarSlice";
import { toast, ToastContainer } from "react-toastify";

const CartItem = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  //console.log(productData);
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <h3 className="pb-4">Shopping Cart</h3>
      {productData.map((item) => {
        return (
          <div className="d-flex  align-items-center ">
            <div className="pe-1">
              <FaTimes
                onClick={() =>
                  dispatch(removeCart(item._id)) &
                  toast.error(`${item.title} is remove`)
                }
              />
            </div>
            <div className="">
              <img className="py-1 " src={item.image} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 ">
              <h6 className="title px-md-5 px-sm-2">{item.title.substring(0,15)}</h6>
              <p className="px-md-5 ">${item.price.toFixed(2)}</p>
              <p className="button-click d-flex align-items-center mx-md-5 ">
                Quntity
                <button
                  onClick={() =>
                    dispatch(
                      decrementquntity({
                        _id: item._id,
                      })
                    )
                  }
                  className="px-2"
                >
                  {" "}
                  -{" "}
                </button>
                {item.quntity}
                <button
                  onClick={() =>
                    dispatch(
                      incrementquntity({
                        _id: item._id,
                      })
                    )
                  }
                >
                  {" "}
                  +{" "}
                </button>
              </p>
              <p className="">${item.price * item.quntity}</p>
            </div>
          </div>
        );
      })}

      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty")
        }
        className="btn btn-danger button-reset"
      >
        Reset Cart
      </button>
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

export default CartItem;
