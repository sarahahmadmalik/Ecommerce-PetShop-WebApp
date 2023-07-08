import React, { createContext, useState, useEffect } from "react";
import { products } from "../Data/Product";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (itemId, productCat, quantity) => {
    const category = products.find((cat) => cat.category === productCat);
    if (category) {
      const product = category.products.find((p) => p.id === itemId);
  
      if (product) {
        setCartItems((prevCartItems) => {
          const itemIndex = prevCartItems.findIndex((item) => item.product.id === itemId);
          if (itemIndex !== -1) {
            // If item already exists in cart, update the quantity
            return prevCartItems.map((item, index) => {
              if (index === itemIndex) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
              }
              return item;
            });
          } else {
            // If item doesn't exist in cart, add it as a new item
            return [
              ...prevCartItems,
              {
                product: product,
                quantity: quantity,
              },
            ];
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
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[itemId];
      return updatedCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };


  const cartTotal = cartItems.reduce((accumulator, item) => {
    const { product, quantity } = item;
    const itemPrice = product ? product.price : 0;
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
        cartCount,
        cartTotal,
        setCartCount,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
