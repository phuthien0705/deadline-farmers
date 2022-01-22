import axios from "axios";
import * as ActionType from "../constants";
import { URL_GET_LIST_PRODUCT } from "../urlAPI";

export const actFetchListProduct = () => {
  return (dispatch) => {
    dispatch(actGetListProductRequest());
    axios({
      url: URL_GET_LIST_PRODUCT,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch(actGetListProductSucceess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actGetListProductFailed(error));
      });
  };
};

const actGetListProductRequest = () => {
  return { type: ActionType.GET_LIST_PRODUCT_REQUEST };
};
const actGetListProductSucceess = (data) => {
  return { type: ActionType.GET_LIST_PRODUCT_SUCCESS, payload: data };
};
const actGetListProductFailed = (error) => {
  return { type: ActionType.GET_LIST_PRODUCT_FAILED, payload: error };
};
