import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Shop.css";
import { products } from "../Data/Product"; // Import the products array from product.js
import { CartContext } from "../components/CartContext";

function Shop() {
  const [selectedPet, setSelectedPet] = useState("all");
  const { cartCount, setCartCount } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  let lines = "";
  if (selectedProduct) {
    lines = selectedProduct.description.split("\n");
  }

  const handlePetTypeSelect = (petType) => {
    setSelectedPet(petType);
  };

  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  // Filter products based on selected pet type
  const filteredProducts =
    selectedPet === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedPet.toLowerCase()
        );

        console.log(filteredProducts)

  return (
    <>
      <div className="main">
        <NavBar />
      </div>

      <section>
        <div className="skewed"></div>
        <div className="skewed-title">
          <h3>We keep your Pets Happy and Healthy all the Time!</h3>
        </div>
        <h2>Best Quality Products for your Pets</h2>
      </section>

      {!selectedProduct && (
        <div className="Listings">
          <h1>Shop Products</h1>
          <div className="listings-btns">
            <button onClick={() => handlePetTypeSelect("all")}>All</button>
            <button onClick={() => handlePetTypeSelect("Cats")}>Cats</button>
            <button onClick={() => handlePetTypeSelect("Dogs")}>Dogs</button>
            <button onClick={() => handlePetTypeSelect("Birds")}>Birds</button>
            <button onClick={() => handlePetTypeSelect("Fish")}>Fish</button>
          </div>
          <div className="cards">
            {filteredProducts.map((category) =>
              category.products.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt="Product Image"
                    className="product-image"
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                  <div>
                    <button className="add-to-cart" onClick={updateCartCount}>
                      Add to Cart
                    </button>
                    <button className="check-out">Check out</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

{selectedProduct && (
  <>
  <div className="go-back-button">
            <button className="go-back-btn" onClick={handleGoBack}>
              <span className="arrow">&larr;</span> Go Back
            </button>
          </div>
  <div className="selected-product">
    <div className='selected-product-img'>
      <img src={selectedProduct.image} alt='Product-Image'/>
    </div>
    <div className='selected-product-content'>
      <h3>{selectedProduct.title}</h3>
      <p className="selected-product-price">${selectedProduct.price}</p>
      {lines.map((line, index) => (
        <p key={index}>
          {line}
          <br />
        </p>
      ))}
      <p>Shipping Cost: $11.21</p>
      {/* Additional product details */}
      <div data-tooltip={`Price: ${selectedProduct.price + 11.21}`} className="add-to-cart-button">
        <div className="button-wrapper">
          <div className="text">Shop Now!</div>
          <span className="icon">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart2"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>

<div className="similar-products">
  <h2>Similar Products</h2>
  <div className="similar-products-list">
    {filteredProducts.map((category) =>
      category.products.map((product) => {
        if (selectedProduct && category.category.toLowerCase() === selectedProduct.category.toLowerCase()) {
          return (
            <div
              className="sim-product-card"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt="Product Image" className="sim-product-image" />
              <h3 className="sim-product-title">{product.title}</h3>
              <p className="sim-product-price">${product.price}</p>
              <div>
                <button className="sim-add-to-cart" onClick={updateCartCount}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        }
        return null
      })
    )}
  </div>
</div>
</>)}

      <Footer />
    </>
  );
}

export default Shop;
