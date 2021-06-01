import products from "../products";
const Electronicshop = () => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div>
          <div className="product-image">
            <img src={product.image} alt="mobile" />
          </div>
          <p className="img-text">{product.name}</p>
          <p className="img-text">{product.price + " KD"}</p>
        </div>
      ))}
    </div>
  );
};
export default Electronicshop;
