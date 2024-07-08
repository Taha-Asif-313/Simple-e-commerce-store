// AuthContext.js
import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [ShowCart, setShowCart] = useState(false);
  const [CartProducts, setCartProducts] = useState([]);
  const [Product, setproduct] = useState([
    {
      Id: 0,
      Title: "T-Shirt",
      Desc: "fanbtastic shirt",
      Url: "/t-shirt.png",
      Label: "men",
      Price: 34,
    },
    {
      Id: 1,
      Title: "Shoes",
      Desc: "fanbtastic shoes",
      Url: "/shoes.png",
      Label: "women",
      Price: 23,
    },
    {
      Id: 2,
      Title: "T-Shirt",
      Desc: "unique shirt",
      Url: "/kids-shirt.png",
      Label: "kids",
      Price: 44,
    },
    {
      Id: 3,
      Title: "Dress Shirt",
      Desc: "fanbtastic shirt",
      Url: "/dress shirt.png",
      Label: "men",
      Price: 50,
    },
    {
      Id: 4,
      Title: "Dress Suit",
      Desc: "fanbtastic design",
      Url: "/Dress-suit.png",
      Label: "men",
      Price: 70,
    },
    {
      Id: 5,
      Title: "Cap",
      Desc: "fanbtastic cap",
      Url: "/Cap.png",
      Label: "men",
      Price: 18,
    },
  ]);

  // Functions
  // Function to add product in cart
  const addToCart = (Id, Title, Desc, Url, Label, Price) => {
    setCartProducts([
      ...CartProducts,
      {
        Id: Id,
        Title: Title,
        Desc: Desc,
        Url: Url,
        Label: Label,
        Price: Price,
      },
    ]);
  };

  // Function to remove irem from cart
  const removeFromCart = (Id) => {
    setCartProducts(CartProducts.slice(1, Id));
  };
  
  return (
    <CartContext.Provider
      value={{
        ShowCart,
        setShowCart,
        CartProducts,
        Product,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
