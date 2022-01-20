import React, { useState, useEffect } from "react";
import data from "./data.json";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TableCart from "../../../components/TableCart";
import TableCartMobile from "../../../components/TableCartMobile";
const PaymentDiv = styled.div({
  position: "fixed",
  bottom: 0,
  background: "#fff",
  width: "100%",
});
const Container = styled.div`
  height: 100%;
  .cart {
    display: block;
  }
  .cartMobile {
    display: none;
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
  const [listCart, setListCart] = useState(data);
  const [purchasedArr, setPurchasedArr] = useState([]);

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
      <div className="cart">
        <TableCart
          listCart={listCart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleCheck={handleCheck}
          purchasedArr={purchasedArr}
        />
      </div>
      <div className="cartMobile">
        <TableCartMobile
          listCart={listCart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleCheck={handleCheck}
          purchasedArr={purchasedArr}
        />
      </div>
      <PaymentDiv className="drop-shadow-md p-5 flex items-center">
        <span className="text-2xl border-r-2 border-slate-400 inline-block w-80 mr-5">
          Tổng thành tiền: {calcTotalMoney()}$
        </span>
        <Button variant="contained">Thanh toán</Button>
      </PaymentDiv>
    </Container>
  );
};

export default CartPage;
