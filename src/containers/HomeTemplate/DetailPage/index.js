
import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailProducts from '../../../components/DetailProduct';
import ProductImage from '../../../components/ProductImage';

const DetailPage = (props) => {
  // CALL API mà chưa bt call sao nè
  const [Items, setItems] = useState()

  const getData = async () => {
    try {
      //lúc này là gán giá trị từ các data lấy dc nè
      const res = await axios.get("./api/v1/product/:id ")

      //sau đó trả ngược về lại để set

      setItems(res.data);
    }
    catch (err) {
      console.error(err);
    };
  }
  const addToCarthandler = () => {
    props.addToCart(props.detail._id)
  }
  //sử dụng nó ^^
  useEffect(() => {
    getData();
  })

  //Render JS DOM ra nè
  return (
    <div className="app" class = "max-w-screen-lg w-full mx-24 my-auto grid grid-cols-2 ">
      <div><ProductImage/></div>
      <div><DetailProducts/></div>
      
    </div>
  )
};

export default DetailPage;
