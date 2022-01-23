import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detailProduct.css";
function DetailPage(props) {
  const { id } = props.match.params;
  const [detailProduct, setDetailProduct] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://68.183.224.29:5000/api/v1/product/${id}`,
    })
      .then((res) => {
        console.log(res.data[0]);
        setDetailProduct(res.data[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const _findIndex = (id) => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    return listCart.findIndex((item) => item._id === id);
  };
  const handleAddCart = () => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    let newListCart = [...listCart];
    const index = _findIndex(detailProduct._id);
    if (index !== -1) {
      newListCart[index].quantity++;
    } else {
      newListCart.push({ ...detailProduct, quantity: 1 });
    }
    localStorage.setItem("listCart", JSON.stringify(newListCart));
  };
  return (
    <div className="main">
      <div className="container" class="grid grid-cols-2">
        <div className="left-column">
          <img src={detailProduct.image} alt="" />
        </div>
        <div className="right-column">
          <div className="product-description">
            <div className="product-description">
              <span>{detailProduct.name}</span>
              <p>{detailProduct.description}</p>
            </div>

            <div className="product-price">
              <span>{detailProduct.price}$</span>
              <button className="cart-btn" onClick={handleAddCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
