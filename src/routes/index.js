import ManageProductPage from "../containers/AdminTemplate/ManageProductPage";
import CartPage from "../containers/HomeTemplate/CartPage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import PurchasedPage from "../containers/HomeTemplate/PurchasedPage";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/cart",
    component: CartPage,
  },
  {
    exact: false,
    path: "/purchased",
    component: PurchasedPage,
  },
];
const routesAdmin = [
  {
    exact: false,
    path: "/manage-product",
    component: ManageProductPage,
  },
];

export { routesHome, routesAdmin };
