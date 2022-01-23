import axios from "axios";
import * as ActionType from "../constants";
import { URL_GET_LIST_CART_ITEM, URL_ADD_ORDER } from "../urlAPI";
export const actFetchListCartItem = () => {
  return (dispatch) => {
    dispatch(actGetListCartItemRequest());
    const token = JSON.parse(localStorage.getItem("token"));
    axios({
      url: URL_GET_LIST_CART_ITEM,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data[0]);
        if (res.data[0])
          dispatch(actGetListCartItemSuccess(res.data[0].products));
        else dispatch(actGetListCartItemSuccess([]));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actGetListCartItemFailed(error));
      });
  };
};

const actGetListCartItemRequest = () => {
  return { type: ActionType.GET_LIST_CART_ITEM_REQUEST };
};
export const actGetListCartItemSuccess = (data) => {
  return { type: ActionType.GET_LIST_CART_ITEM_SUCCESS, payload: data };
};
const actGetListCartItemFailed = (error) => {
  return { type: ActionType.GET_LIST_CART_ITEM_FAILED, payload: error };
};
//----------------------------------------------
