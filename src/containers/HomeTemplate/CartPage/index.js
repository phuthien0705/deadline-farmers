import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TableCart from "../../../components/TableCart";
import TableCartMobile from "../../../components/TableCartMobile";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListCartItem } from "../../../redux/actions/cartAction";
import Loader from "../../../components/Loader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { URL_ADD_ORDER, URL_UPDATE_CART } from "./../../../redux/urlAPI";
import axios from "axios";
import Swal from "sweetalert2";

const PaymentDiv = styled.div({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#fff",
  width: "100%",
  boxShadow: "0 5px 10px rgba(0,0,0,.5)",
});
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  .cart {
    display: block;
    margin-bottom: 80px;
  }
  .cartMobile {
    display: none;
    margin-bottom: 80px;
  }
  @media (max-width: 900px) {
    .cart {
      display: none;
    }
    .cartMobile {
      display: block;
    }
  }
`;

const CartPage = () => {
  const dispatch = useDispatch();
  const [listCart, setListCart] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("listCart"));
    console.log(cart);
    return cart;
  });
  const [purchasedArr, setPurchasedArr] = useState([]);
  const matches = useMediaQuery("(min-width:700px)");
  const data = useSelector((state) => state.cartReducer.data);
  const loading = useSelector((state) => state.cartReducer.loading);
  // useEffect(() => {
  //   dispatch(actFetchListCartItem());
  // }, []);
  // useEffect(() => {
  //   setListCart(() => {
  //     console.log(data);
  //     return data;
  //   });
  // }, [data]);
  const _findIndex = (id) => {
    return listCart.findIndex((item) => item._id === id);
  };
  const handleUpdateQuantity = (product, flag) => {
    let newListCart = [...listCart];
    const index = _findIndex(product._id);
    if (index !== -1) {
      if (flag) {
        newListCart[index].quantity++;
      } else {
        if (newListCart[index].quantity <= 1) {
          newListCart.splice(index, 1);
        } else {
          newListCart[index].quantity--;
        }
      }
    }
    localStorage.setItem("listCart", JSON.stringify(newListCart));
    setListCart(newListCart);
  };
  const handleCheck = (id) => {
    setPurchasedArr((prev) => {
      const isChecked = purchasedArr.includes(id);
      if (isChecked) {
        //uncheck
        return purchasedArr.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const calcTotalMoney = () => {
    let totalMoney = 0;
    listCart.forEach((item) => {
      if (purchasedArr.includes(item._id))
        totalMoney += item.quantity * item.price;
    });
    return totalMoney;
  };
  async function handleBuy() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(purchasedArr);
      const order = [];
      listCart.forEach((item) => {
        if (purchasedArr.includes(item.productId))
          order.push({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          });
      });
      console.log(order);
      await axios({
        method: "POST",
        url: URL_ADD_ORDER,
        data: { products: order },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      let products = [];
      const remainList = listCart.filter(
        (item) => !purchasedArr.includes(item._id)
      );
      remainList.forEach((item) => {
        if (remainList.includes(item._id))
          products.push({
            productId: item._id,
            quantity: item.quantity,
            price: item.price,
          });
      });
      await axios({
        method: "POST",
        url: URL_UPDATE_CART,
        data: { products: remainList },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      Swal.fire("Successfully purchase <3", "Press ok to exit!", "success");
      localStorage.setItem("listCart", JSON.stringify(remainList));
      setListCart(remainList);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {listCart.length === 0 ? (
            <div className="text-lg">
              There are no products in the cart here :((
            </div>
          ) : matches ? (
            <TableCart
              listCart={listCart}
              handleUpdateQuantity={handleUpdateQuantity}
              handleCheck={handleCheck}
              purchasedArr={purchasedArr}
            />
          ) : (
            <TableCartMobile
              listCart={listCart}
              handleUpdateQuantity={handleUpdateQuantity}
              handleCheck={handleCheck}
              purchasedArr={purchasedArr}
            />
          )}
          <PaymentDiv className="drop-shadow-md p-5 flex items-center text-2xl ">
            <span className="inline-block w-80">
              Total money: {calcTotalMoney()}$
            </span>
            <div
              style={{
                borderLeft: "1px solid rgba(0,0,0,0.2)",
                paddingLeft: "10px",
              }}
            >
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleBuy}
              >
                BUY
              </button>
            </div>
          </PaymentDiv>
        </>
      )}
    </Container>
  );
};

export default CartPage;
