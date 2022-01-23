import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function DetailProduct() {
    const [detailProduct, setDetailProduct] = useState([])
    const setProduct = async () => {
        const res = await axios.get(`http://68.183.224.29:5000/api/v1/product/:id [GET]`)
        console.log(res)
        return res;
    }
    useEffect(() => {
        const getProducts = async () => {
            const allProducts = await setProduct()
            if (allProducts) setDetailProduct(detailProduct)
        }
        getProducts()
    }, [])


    return (
        <div>
            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                    </div>
                    <span>$ {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <p>Sold: {detailProduct.sold}</p>

                </div>
            </div>
        </div>
    )
}



export default DetailProduct
