import * as ActionType from "../constants";
const initialState = {
  loading: false,
  data: [],
  error: null,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_CART_ITEM_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };
    case ActionType.GET_LIST_CART_ITEM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.GET_LIST_CART_ITEM_FAILED:
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default cartReducer;
