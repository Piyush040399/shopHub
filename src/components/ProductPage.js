import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css"

const ProductPage = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    // console.log("res");
    Axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // console.log(res);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setDiscountPercentage(res.data.discountPercentage);
        setRating(res.data.rating);
        setStock(res.data.stock);
        setBrand(res.data.brand);
        setCategory(res.data.category);
        setImages(res.data.images);
        if(res.data.images.length > 0) {
          setTitleImage(res.data.images[0])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section id="product">
        <div className="left-column">
          <img id="productImg" alt="" src={titleImage} />
        </div>
        <div className="right-column">
          <div className="product-description">
            <h1 id="name">{title}</h1>
            <h4 id="brand">{brand}</h4>
            <h3>
              Price: Rs <span id="price">{price}</span>
            </h3>
            <h4>
             <span >Discount: {discountPercentage}</span><br/><br/>
             <span >Rating: {rating}</span><br/><br/>
             <span >Stock: {stock}</span><br/><br/>
             <span >Category: {category}</span><br/>
            </h4>
            <div className="description">
              <h3>description</h3>
              <p id="description">{description}</p>
            </div>
            <div className="product-preview">
              <h3>Product Preview</h3>
              <div className="previewImg">
                {images.map((thisImage) => (
                  <img
                    onClick={(e) => setTitleImage(thisImage)}
                    id="img0"
                    className="smallImg active"
                    alt=""
                    src={thisImage}
                    key={thisImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
