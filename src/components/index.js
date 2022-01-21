import axios from "axios";
import React, { useEffect, useState } from "react";
//Thử lấy data để thử
import DetailProduct from "../../../components/DetailProduct";
import ProductImage from "../../../components/ProductImage";
import { useDispatch } from 'react-redux';

function DetailPage(props) {
  const dispatch = useDispatch();

  const productId = props.match.params.productId
  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios.get('/api/v1/product/:id[GET]')
      .then(Response => {
        setProduct(Response.data[0])
      })
  }, [])




  return (
    <div >
      <div class="flex justify-center mt-1/2">
        
        <div class="grid grid-cols-2  w-full h-1/4 mt-20" >
          <div><ProductImage /></div>
          <div><DetailProduct /> </div>
        </div>
      </div>
    </div>
  )
};


export default DetailPage;
