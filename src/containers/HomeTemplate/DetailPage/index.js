import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detailProduct.css";
// import "./lib_css.css";
import { RatingStar } from "rating-star";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
function DetailPage(props) {
  const [open, setOpen] = useState(false);
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
    if (!listCart) {
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "warning",
        title: 'Login to be able to add products to your cart :">',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
    let newListCart = [...listCart];
    const index = _findIndex(detailProduct._id);
    if (index !== -1) {
      newListCart[index].quantity++;
    } else {
      newListCart.push({ ...detailProduct, quantity: 1 });
    }
    setOpen(true);
    localStorage.setItem("listCart", JSON.stringify(newListCart));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <section
      class="u-clearfix u-section-1"
      id="sec-fcde"
      style={{
        display: "flex",
      }}
    >
      <div
        class="u-clearfix u-sheet u-sheet-1"
        style={{ width: "80%", margin: "auto" }}
      >
        <div class="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row" className="detail-container">
              <div
                class="u-container-style u-image u-layout-cell u-size-30 u-image-1"
                data-image-width="800"
                data-image-height="533"
                style={{
                  width: "fit-content",
                  margin: "auto",
                  padding: "1.5rem 0 1.5rem 0",
                }}
              >
                <div
                  class="u-border-2 u-border-palette-1-light-1 u-container-layout u-container-layout-1 flex justify-center"
                  style={{ width: "fit-content" }}
                >
                  <img src={detailProduct.image} alt="" />
                </div>
              </div>
              <div
                class="u-container-style u-layout-cell u-size-30 u-layout-cell-2"
                className="detail-content"
              >
                <div class="u-container-layout u-container-layout-2">
                  <h3 class="u-text u-text-default u-text-1" className="name">
                    {detailProduct.name}
                  </h3>
                  <div class="ml-12 mb-2" className="rating">
                    Rating:
                    <RatingStar
                      maxScore={5}
                      id={detailProduct._id}
                      rating={detailProduct.rating}
                    />
                  </div>
                  <p class="u-text u-text-2">
                    <p class="u-text u-text-2 ">{detailProduct.description}</p>
                  </p>
                  <div class="product-price ml-28">
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
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
    </section>
  );
}

export default DetailPage;
