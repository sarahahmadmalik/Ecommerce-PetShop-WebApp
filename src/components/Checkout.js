import React, { useState, useContext } from 'react';
import '../styles/Checkout.css';
import Cart from '../components/Cart'
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  });

  const pageNavigate = useNavigate();

  const { cartItems, cartTotal, shippingCost } = useContext(CartContext);
  const [activeStage, setActiveStage] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleStageChange = (stage) => {
    setActiveStage(stage);
    console.log(stage);
  };

  const handlePageNavigate = () => {
    pageNavigate('../Cart');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your checkout logic here
    // You can access the form data from the state variable (formData)

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      postalCode: '',
      phoneNumber: '',
    });
  };

  console.log(cartTotal);

  return (
    <div className="checkout-container">
      <div className='checkout-wrapper'>
      <h1 className="checkout-heading">PetCare</h1>
      <div className="checkout-links">
        <span className={`checkout-link ${activeStage === 0 ? 'active' : ''}`} onClick={() => handlePageNavigate()}>
          Cart
        </span>
        <span className="checkout-link">{'>'}</span>
        <span className={`checkout-link ${activeStage === 1 ? 'active' : ''}`} onClick={() => handleStageChange(1)}>
          Customer Information
        </span>
        <span className="checkout-link">{'>'}</span>
        <span className={`checkout-link ${activeStage === 2 ? 'active' : ''}`} onClick={() => handleStageChange(2)}>
          Shipping Method
        </span>
        <span className="checkout-link">{'>'}</span>
        <span className={`checkout-link ${activeStage === 3 ? 'active' : ''}`} onClick={() => handleStageChange(3)}>
          Payment Method
        </span>
      </div>
      
      {activeStage === 1 && (
       <form className="checkout-form" onSubmit={handleSubmit}>
       {/* Stage 2: Customer Information */}
       <div className="form-row">
        <div className='contact-label'>
         <label className="form-label" htmlFor="contactInformation">
           Contact Information:
         </label>
         <p className="form-login">
           Already have an account? <a href="/">Login</a>
         </p>
         </div>
         <input
           className="form-input"
           type="email"
           id="contactInformation"
           name="contactInformation"
           value={formData.contactInformation}
           onChange={handleInputChange}
           placeholder="Enter your email"
           required
         />
       </div>
       
       <h2 className="shipping-address-heading">Shipping Address</h2>
       <div className="form-row inline-row">
         <input
           className="form-input-inline"
           type="text"
           id="firstName"
           name="firstName"
           value={formData.firstName}
           onChange={handleInputChange}
           placeholder="First Name"
           required
         />
         <input
           className="form-input-inline"
           type="text"
           id="lastName"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
           placeholder="Last Name"
           required
         />
       </div>
       <div className="form-row">
         <input
           className="form-input"
           type="text"
           id="address"
           name="address"
           value={formData.address}
           onChange={handleInputChange}
           placeholder="Address"
           required
         />
       </div>
       <div className="form-row">
         <input
           className="form-input"
           type="text"
           id="apartment"
           name="apartment"
           value={formData.apartment}
           onChange={handleInputChange}
           placeholder="Apartment/Suite (optional)"
         />
       </div>
       <div className="form-row">
         <input
           className="form-input-inline"
           type="text"
           id="city"
           name="city"
           value={formData.city}
           onChange={handleInputChange}
           placeholder="City"
           required
         />
         <input
           className="form-input-inline"
           type="text"
           id="postalCode"
           name="postalCode"
           value={formData.postalCode}
           onChange={handleInputChange}
           placeholder="Postal Code"
           required
         />
       </div>
       <div className="form-row">
         <input
           className="form-input"
           type="tel"
           id="phoneNumber"
           name="phoneNumber"
           value={formData.phoneNumber}
           onChange={handleInputChange}
           placeholder="Phone Number"
         />
       </div>
       <div className='submit-area'>
       <span className="return-link" onClick={() => handleStageChange(0)}>
    &lt; Return to Cart
  </span>
        <button className="form-submit" type="submit">
         Continue to Shipping Method
       </button>
       </div>
       
     </form>
      )}
      {/* ...other stages */}
      </div>
      <div className="checkout-summary">
          <div className="checkout-summary-items">
            {cartItems.map((item) => (
              <div className="checkout-summary-item" key={item.product.id}>
                <img src={item.product.image} alt={item.product.title} className="checkout-summary-item-image" />
                <div className="checkout-summary-item-details">
                  <h3 className="checkout-summary-item-title">{item.product.title}</h3>
                  <p className="checkout-summary-item-quantity">Quantity: {item.quantity}</p>
                  <p className="checkout-summary-item-price">${item.product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary-total">
            <hr className="checkout-summary-divider" />
            <p className="checkout-summary-subtotal">Subtotal: ${cartTotal}</p>
            <p className="checkout-summary-shipping">Shipping: ${shippingCost}</p>
            <hr className="checkout-summary-divider" />
            <p className="checkout-summary-total-price">Total: ${(parseFloat(cartTotal) + parseFloat(shippingCost)).toFixed(2)}</p>
          </div>
        </div>
      </div>
  );
};

export default Checkout;
