import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detailProduct.css";
import { RatingStar } from "rating-star";
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
    <section class=" u-border-grey-75 u-clearfix u-section-1 grid grid-cols-3   " id="sec-5467">
      <div>
      </div>
      <div class="u-clearfix u-sheet u-sheet-1  ">
        <div class="u-clearfix u-expanded-width u-gutter-34 u-layout-wrap u-layout-wrap-1 ">
          <div class="u-layout">
            <div class="u-layout-row">
              <div
                class="u-container-style u-hover-feature u-image u-image-round u-layout-cell u-radius-9 u-size-30 u-image-1"
                data-image-width="400"
                data-image-height="265"
              >
                <div class="u-container-layout u-container-layout-1 flex justify-center">
                  <img src={detailProduct.image} alt="" />
                </div>
              </div>
              <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class=" u-border-5  u-border-grey-75 u-container-layout u-container-layout-2">
                  <h2 class="u-text u-text-default u-text-1 text-3xl">
                    {detailProduct.name}
                  </h2>
                  <div class="ml-12 mb-2">
                    Rating:
                  <RatingStar
                    maxScore={5}
                    id={detailProduct._id}
                    rating={detailProduct.rating}
                  />
                  </div>
                  <p class="u-text u-text-2 ">{detailProduct.description}</p>
                  <div class="product-price">
                    <span>{detailProduct.price}$</span>
                    <button className="cart-btn" onClick={handleAddCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
