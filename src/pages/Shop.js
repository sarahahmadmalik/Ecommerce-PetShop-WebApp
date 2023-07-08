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
          <div className="item-cards">
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
                  <div className="btn-price">
                  <p className="product-price"  onClick={() => handleProductClick(product)}>${product.price}</p>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product.id, product.category)}>
                    <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>
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
      <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>
    <span>Add to Cart</span>
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
