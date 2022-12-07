import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, image, name, description, price }) => {
  return (
    <Link to={`/products/${id}`} className="card-container">
      <div className="thumbnail-container">
        <img className="thumbnail" src={image} alt="ProductImage" />
      </div>
      <div className="card-detail">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">
          <span> Price: {price}</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
