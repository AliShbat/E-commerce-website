import "./Products.css";
import ProductsCard from "../ProductsCard/ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="products container pb-5">
      <div className=" text-center py-5 shop ">
        <h2>shopping everyday</h2>
        <p className="py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolorem alias, quis vitae ratione commodi hic nostrum eius, eos
          recusandae tempore dolorum nihil, consequuntur dolor rerum animi ex
          reprehenderit ducimus? recusandae tempore dolorum nihil, consequuntur
          dolor rerum animi ex reprehenderit ducimus?
        </p>
      </div>
      <div>
        <div className="row ">
          {products.map((item) => {
            return (
              <div
                key={item._id}
                className="col-lg-4 col-md-6  py-4 text-center"
              >
                <ProductsCard product={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
