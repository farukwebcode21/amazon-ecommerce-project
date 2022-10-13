import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCartShopping} />;

const Product = ({ handleAddToCart, product }) => {
  const { img, name, price, ratings, stock, seller } = product;

  return (
    <div className="product-cart">
      <img src={img} alt="product"></img>
      <div className="product-text">
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>
          <small>Rating :{ratings}</small>
        </p>
        <p>
          <small>Seller :{seller}</small>
        </p>
        <p>
          <small>Stock :{stock}</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn-addTo-Cart"
      >
        <p>Add To Cart {element}</p>
      </button>
    </div>
  );
};

export default Product;
