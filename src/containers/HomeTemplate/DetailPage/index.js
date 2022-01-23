import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
    <div>
      <div className="detail">
        <img src={detailProduct.image} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.name}</h2>
            <h6>#id: {detailProduct._id}</h6>
          </div>
          <span>$ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          {/* <p>{detailProduct.content}</p> */}
          {/* <p>Sold: {detailProduct.sold}</p> */}
        </div>
      </div>
      <button className="border rounded ">Add to cart</button>
    </div>
  );
}

export default DetailPage;
