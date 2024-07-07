// AuthContext.js
import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [ShowCart, setShowCart] = useState(false);
  const [CartProducts, setCartProducts] = useState([]);
  const [Product, setproduct] = useState([
    {
      Id: 1,
      Title: "T-Shirt",
      Desc: "fanbtastic shirt",
      Url: "/t-shirt.png",
      Label: "men",
      Price: 34,
    },
    {
      Id: 2,
      Title: "Shoes",
      Desc: "fanbtastic shoes",
      Url: "/shoes.png",
      Label: "women",
      Price: 23,
    },
    {
      Id: 3,
      Title: "T-Shirt",
      Desc: "unique shirt",
      Url: "/kids-shirt.png",
      Label: "kids",
      Price: 44,
    },
    {
      Id: 4,
      Title: "Dress Shirt",
      Desc: "fanbtastic shirt",
      Url: "/dress shirt.png",
      Label: "men",
      Price: 50,
    },
    {
      Id: 5,
      Title: "Dress Paint",
      Desc: "fanbtastic design",
      Url: "/product.png",
      Label: "men",
      Price: 70,
    },
    {
      Id: 6,
      Title: "Cap",
      Desc: "fanbtastic cap",
      Url: "/product.png",
      Label: "men",
      Price: 18,
    },
  ]);

  // Functions
  const addToCart = (Id, Title, Desc, Url, Label, Price) => {
    setCartProducts((prevCart) => [
      ...prevCart,
      {
        Id: Id,
        Title: Title,
        Desc: Desc,
        Url: Url,
        Label: Label,
        Price: Price,
      },
    ]);
    console.log(CartProducts);
  };
  return (
    <CartContext.Provider
      value={{ ShowCart, setShowCart, CartProducts, Product, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
