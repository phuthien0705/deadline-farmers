import axios from "axios";
import * as ActionType from "../constants";
import {
  URL_GET_LIST_PRODUCT,
  URL_DELETE_PRODUCT,
  URL_ADD_PRODUCT,
  URL_UPDATE_PRODUCT,
} from "../urlAPI";

export const actFetchListProduct = () => {
  return (dispatch) => {
    dispatch(actGetListProductRequest());
    axios({
      url: URL_GET_LIST_PRODUCT,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.products);
        dispatch(actGetListProductSucceess(res.data.products));
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
//----------------------------------------------------------------
export const actDeleteProduct = (product) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "DELETE",
    url: URL_DELETE_PRODUCT(product._id),
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
};
export const actAddProduct = (product) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "POST",
    url: URL_ADD_PRODUCT,
    data: product,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const actUpdateProduct = (product, id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "PUT",
    url: URL_UPDATE_PRODUCT(id),
    data: product,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
//----------------------------------------------------------------
