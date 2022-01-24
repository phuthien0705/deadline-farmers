import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { CLOSING } from "ws";
class Product extends Component {
  render() {
    return (
      <tr className="rounded-full m-3">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10  md:inline">
               <img
                className=" vh-10 w-10 rounded"
                src={this.props.product.image}
                alt=""
              /> 
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 truncate  ">
                {this.props.product.name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {this.props.product.quantity}
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          {this.props.product.price*this.props.product.quantity}
        </td>
      </tr>
    );
  }
}
class PurchasedPage extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token)
      axios({
        method: "GET",
        url: "http://68.183.224.29:5000/api/v1/order/get-order",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);

          this.setState({ orders: res.data.order });
        })
        .catch((error) => console.log(error));
    else {
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "warning",
        title: 'Looks like you are not logged in :"(',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  }

  render() {
    return (
      
      <div className="flex flex-col">
        <h3 className="text-center text-2xl font-bold">Purchased Products </h3>
        <div className="-my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
          <div className="py-2  align-middle  xl:w-[70%] w-[90%] m-auto sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200  sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quatity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {this.state.orders.map((value, key) => (
                    <Product key={key} product={value} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PurchasedPage;
