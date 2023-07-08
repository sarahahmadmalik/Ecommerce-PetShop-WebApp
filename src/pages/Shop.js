import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Shop.css";
import { products } from "../Data/Product"; // Import the products array from product.js
import { CartContext } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart } from 'react-icons/fa';
import { faTag, faMapMarker, faClock, faMoneyBillAlt} from "@fortawesome/free-solid-svg-icons";
import Banners from "../components/Banners";

function Shop() {
  const [selectedPet, setSelectedPet] = useState("all");
  const { cartCount, setCartCount, cartItems, addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerAddress, setCustomerAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipgeolocationapi.com/json/');
        if (response.ok) {
          const data = await response.json();
          const { city, region, country_name } = data;
          const address = `${city}, ${region}, ${country_name}`;
          setCustomerAddress(address);
        } else {
          throw new Error('Failed to fetch location');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLocation();
  }, []);

  let lines = "";
  if (selectedProduct) {
    lines = selectedProduct.description.split("\n");
  }

  const handlePetTypeSelect = (petType) => {
    setSelectedPet(petType);
  };


  const handleProductClick = (product) => {
    window.scrollTo({ top: 120, behavior: 'smooth' });
    setSelectedProduct(product);
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (productId, productCat) => {
    setCartCount((prevCount) => prevCount + 1);
    addToCart(productId, productCat, quantity)
    // Reset the quantity to 1
    setQuantity(1);
  };

  // Calculate the total price based on the cartItems
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const [productId, quantity] of Object.entries(cartItems)) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        totalPrice += product.price * quantity;
      }
    }
    return totalPrice.toFixed(2);
  };

  // Filter products based on selected pet type
  const filteredProducts =
    selectedPet === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedPet.toLowerCase()
        );

  return (
    <>
      <div className="main">
        <NavBar />
      </div>

      <section id="skewed">
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
                >
                  <img
                    src={product.image}
                    alt="Product Image"
                    className="product-image"
                    onClick={() => handleProductClick(product)}
                  />
                  <h3 className="product-title"  onClick={() => handleProductClick(product)}>{product.title}</h3>
                  <p className="product-price"  onClick={() => handleProductClick(product)}>${product.price}</p>
                  <div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product.id, product.category)}>
                    <span className="cart-icon">
    <FaShoppingCart /> Add to Cart
  </span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

{selectedProduct && (
  <div className="selected-item">
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
      <div className="discount">
      <div className="tag-icon">
                      <FontAwesomeIcon icon={faTag} />
                    </div>
                    <div className="icon-text">
                     <p> Save 25% off for your very first order</p>
                    </div>
                    </div>
      <p>Shipping Cost: $11.21</p>
      <div className="quantity">
            <button className="decrement" onClick={handleDecrement}>
              -
            </button>
            {quantity}
            <button className="increment" onClick={handleIncrement}>
              +
            </button>
          </div>
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
      <button className="add-to-cart" onClick={() => handleAddToCart(selectedProduct.id)}>
                    <span className="cart-icon">
    <FaShoppingCart /> Add to Cart
  </span>
  </button>
    </div>
    <div className="delivery-information">
            <div className="delivery-icon">
              <FontAwesomeIcon icon={faMapMarker} id="icon" />
            <p>Delivery Address:</p>
            {isLoading ? 'Loading...' : customerAddress}
             </div>
            <div className="delivery-icon">
              <FontAwesomeIcon id="icon" icon={faClock} />
            <p>Standard Delivery</p>2-3 days
            </div>
            <div className="delivery-icon">
              <FontAwesomeIcon id="icon" icon={faMoneyBillAlt} />
            <p>Cash on Delivery Available</p>
            </div>
          </div>
  </div>

  <Banners class1='shop-banner' class2='shop-title' title='Sign up and get amazing discounts on all products!' btnTitle='Signup now!' navigate='../pages/LoginPage'/>

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
              <button className="add-to-cart" onClick={handleAddToCart}>
                    <span className="cart-icon">
    <FaShoppingCart /> Add to Cart
  </span>
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
</div>)}

      <Footer />
    </>
  );
}

export default Shop;
