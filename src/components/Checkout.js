import React, { useState } from 'react';
import '../styles/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    apartment: '',
    country: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your checkout logic here
    // You can access the form data from the state variable (formData)

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      apartment: '',
      country: '',
      postalCode: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout Page</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="address">
            Address:
          </label>
          <textarea
            className="form-input"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="apartment">
            Apartment/Suite:
          </label>
          <input
            className="form-input"
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="country">
            Country:
          </label>
          <input
            className="form-input"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="postalCode">
            Postal Code:
          </label>
          <input
            className="form-input"
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            className="form-input"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button className="form-submit" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
