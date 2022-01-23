import React, { Component } from 'react';
import axios from 'axios';
class Product extends Component {

    render() {
        return (
            <tr className="rounded-full m-3">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 hidden md:inline">
                            <img className=" vh-10 w-10 rounded-full" src={this.props.ImgLink} alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {this.props.Name}
                            </div>

                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {this.props.Quantity}

                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    {this.props.Price}

                </td>

            </tr>
        );
    }
}
class PurchasedPage extends Component {
    state = {
        orders: []
      }

    componentDidMount() {
        axios.get(`http://68.183.224.29:5000//api/v1/product`)
            
            .then(res => {
                const orders = res.data;

                this.setState({ orders });
            })
            .catch(error => console.log(error));
    }
     
   render() {
      
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
                <div className="py-2  align-middle  w-[70%] m-auto sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200  sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quatity
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                               
                            {this.state.orders.map((value,key) => 
                            <Product  key={key}  Name={value.productID} Quantity={value.quantity} Price={value.price*value.quantity} /> )}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default PurchasedPage;
