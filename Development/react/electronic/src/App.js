import "./App.css";
import products from "./products";

function App() {
  const productsList = products.map((product) => (
    <div>
      <div className="product-image">
        <img src={product.image} alt="mobile" />
      </div>
      <p className="img-text">{product.name}</p>
      <p className="img-text">{product.price + " KD"}</p>
    </div>
  ));
  return (
    <div>
      <div>
        <div className="text-style">
          <h1>electronic store</h1>
          <p middle-text>
            this the best electronic store that you can find the newest product
            in a appropriate price{" "}
          </p>
        </div>
        <img
          className="shop-image"
          src="https://www.midvalley.com.my/img/tenant/Flash%20Gadget%20Mobile-425Jun2020155009.jpg"
          alt="electronic store"
        />
      </div>
      <div className="products-list">{productsList}</div>
    </div>
  );
}

export default App;
