import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import Axios from "axios";

const initialProductList = [];
const initialCategories = [];
const initialCategory = "all";

const ProductList = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProductList);
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        // console.log(res);
        if (res && res.data) {
          setCategories(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchAllProducts = () => {
    Axios.get("https://dummyjson.com/products")
      .then((res) => {
        // console.log(res);
        if (res && res.data) {
          setProducts(res.data.products);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(
    (prevProps) => {
      if (category === "all") {
        fetchAllProducts();
      } else {
        Axios.get(`https://dummyjson.com/products/category/${category}`)
          .then((res) => {
            // console.log(res);
            if (res && res.data) {
              setProducts(res.data.products);
            }
          })
          .catch((err) => {
            // console.log(err);
          });
      }
    },
    [category]
  );

  return (
    <>
      <div className="filter-bar">
        <span>Product List</span>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="list">
        {products.length > 0 ? (
          products.map((thisProduct) => (
              <ProductCard
                key={thisProduct.id}
                id={thisProduct.id}
                image={thisProduct.thumbnail}
                name={thisProduct.title}
                description={thisProduct.description}
                price={thisProduct.price}
              />
          ))
        ) : (
          <h2>No data to show</h2>
        )}
      </div>
    </>
  );
};

export default ProductList;
