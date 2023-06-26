import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductsCard.css";
import { addToCard } from "../../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";
import Fade from "react-reveal/Fade";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const root = idString(_id);
  const handelimage = () => {
    navigate(`/Product/${root}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="productsCard container">
      <div className="card">
        <Fade>
          <div>
            <img
              onClick={handelimage}
              className="img-fluid"
              src={product.image}
              alt=""
            />
          </div>
        </Fade>

        <div className="d-flex justify-content-between py-1 ps-2 ">
          <h5 className="card-title">{product.title.substring(0, 12)} </h5>
          <div className="d-flex price ">
            <p
              onClick={() =>
                dispatch(
                  addToCard({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    Oldprice: product.Oldprice,
                    quntity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="px-2.5 add-to-card"
            >
              add To Card
            </p>
            <div className="d-flex justify-content-between ">
              <span>${product.oldPrice}</span>
              <span className="px-1">${product.price.toFixed(1)} </span>
            </div>
          </div>
        </div>
        <p className="card-text">{product.category}</p>
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

export default ProductsCard;
