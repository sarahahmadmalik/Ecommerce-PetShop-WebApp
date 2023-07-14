import React, { createContext, useState, useEffect } from "react";
import { products } from "../Data/Product";
import { PharmProducts } from "../Data/PharmProducts";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(6.21);
  
  const addToCart = (itemId, productCat, quantity, productType) => {
    let category ;
   
    if(productType === 'Shop'){
      console.log('ji')
      category = products.find((cat) => cat.category === productCat);
    }
    else if(productType === 'Pharmacy'){
      category = PharmProducts.find((cat) => cat.category === productCat);
    }
    
    console.log('ji9')
    if (category) {
      const product = category.products.find((p) => p.id === itemId);
  
      if (product) {
        setCartItems((prevCartItems) => {
          const itemIndex = prevCartItems.findIndex((item) => item.product.id === itemId);
          if (itemIndex !== -1) {
            // If item already exists in cart, update the quantity
            const updatedCartItems = prevCartItems.map((item, index) => {
     
              if (index === itemIndex) {
                const newQuantity = item.quantity + quantity;
                if (newQuantity <= 0) {
                  // Do nothing if resulting quantity is zero or less
                  return item;
                }
                return {
                  ...item,
                  quantity: newQuantity,
                };
               
              }
              console.log('here2');
              return item;
            });
            console.log(updatedCartItems); // Log updatedCartItems
            return updatedCartItems;
          } else {
            // If item doesn't exist in cart, add it as a new item
            if (quantity <= 0) {
              console.log('oi')
              // Do nothing if quantity is zero or less
              return prevCartItems;
            }
            const newCartItem = {
              product: product,
              quantity: quantity,
            };
            const updatedCartItems = [...prevCartItems, newCartItem]; // Log updatedCartItems
            return updatedCartItems;
          }
        });
      }
    }
  };
  
  
  
  useEffect(() => {
    console.log(cartItems); // Log the updated cartItems whenever it changes
  }, [cartItems]);
  

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => item.product.id !== itemId);
      return updatedCartItems;
    });
  };
  
  const clearCart = () => {
    setCartItems([]);
  };


  const cartTotal = cartItems.reduce((accumulator, item) => {
    const { product, quantity } = item;
    const itemPrice = product ? Number(product.price) : 0; // Convert price to a number
    const totalPrice = itemPrice * quantity;
    return accumulator + totalPrice;
  }, 0).toFixed(2);
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      
        cartTotal,
      
        setCartItems,
        shippingCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
