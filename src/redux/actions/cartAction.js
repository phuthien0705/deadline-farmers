import axios from "axios";
import * as ActionType from "../constants";
import { URL_GET_LIST_CART_ITEM } from "../urlAPI";
export const actFetchListCartItem = () => {
  return (dispatch) => {
    dispatch(actGetListCartItemRequest());
    axios({
      url: URL_GET_LIST_CART_ITEM,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch(actGetListCartItemSuccess(res.data));
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
const actGetListCartItemSuccess = (data) => {
  return { type: ActionType.GET_LIST_CART_ITEM_SUCCESS, payload: data };
};
const actGetListCartItemFailed = (error) => {
  return { type: ActionType.GET_LIST_CART_ITEM_FAILED, payload: error };
};
//----------------------------------------------
