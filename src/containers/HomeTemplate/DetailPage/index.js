import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detailProduct.css"
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

    return (
        <div className="main">
            <div className="container" class='grid grid-cols-2'>
                <div className="left-column" >
                    <img src={detailProduct.image} alt="" />
                </div>
                <div class="right-column">
                    <div class="product-description">
                        <div class="product-description">
                            <span>{detailProduct.name}</span>
                            <p>{detailProduct.description}</p>
                        </div>

                        <div class="product-price">
                            <span>{detailProduct.price}$</span>
                            <a href="#" class="cart-btn" /*them cai ham add carrt vao nha*/>Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
