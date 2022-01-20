import CartPage from "../containers/HomeTemplate/CartPage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import PurchasedPage from "../containers/HomeTemplate/PurchasedPage";
import AddProductPage from "../containers/HomeTemplate/AddProductPage";
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

  {
    exact: false,
    path: "/add-product",
    component: AddProductPage,
  },
];

export default routesHome;
