import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TableCart from "../../../components/TableCart";
import TableCartMobile from "../../../components/TableCartMobile";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListCartItem } from "../../../redux/actions/cartAction";
import Loader from "../../../components/Loader";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const [listCart, setListCart] = useState([]);
  const [purchasedArr, setPurchasedArr] = useState([]);
  const matches = useMediaQuery("(min-width:700px)");
  const data = useSelector((state) => state.cartReducer.data);
  const loading = useSelector((state) => state.cartReducer.loading);
  useEffect(() => {
    dispatch(actFetchListCartItem());
  }, []);
  useEffect(() => {
    setListCart(data);
  }, [data]);
  const _findIndex = (id) => {
    return listCart.findIndex((item) => item.id === id);
  };
  const handleUpdateQuantity = (product, flag) => {
    let newListCart = [...listCart];
    const index = _findIndex(product.id);
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
      if (purchasedArr.includes(item.id))
        totalMoney += item.quantity * item.price;
    });
    return totalMoney;
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          {matches ? (
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
            <span className=" border-r-2 border-slate-400 inline-block w-80 mr-5">
              Total money: {calcTotalMoney()}$
            </span>
            <button
              class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              BUY
            </button>
          </PaymentDiv>
        </>
      )}
    </Container>
  );
};

export default CartPage;
