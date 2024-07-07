import React from "react";
import ProductCard from "../Cards/ProductCard";

const ProductSection = ({ Products }) => {
  return (
    <>
      <div className="products-section w-full py-10 px-10 lg:px-20 flex flex-col items-center">
        {/* Product section content  */}
        <div className="content gap-4 flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-5xl font-bold">Products</h1>
          <p className="lg:text-xl text-lg text-center text-primary font-semibold ">
            Discover the latest products!
          </p>
        </div>

        {/* Products cards  */}
        <div className="products py-20 lg:px-0 flex lg:justify-center flex-col lg:flex-row flex-wrap w-full gap-10 ">
          {/* Product card */}
          {Products.map((products) => {
            return (
              <ProductCard
                Id={products.Id}
                Url={products.Url}
                Title={products.Title}
                Desc={products.Desc}
                Label={products.Label}
                Price={products.Price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
