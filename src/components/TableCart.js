import React from "react";
import { Link } from "react-router-dom";

const TableCart = ({
  listCart,
  handleUpdateQuantity,
  handleCheck,
  purchasedArr,
}) => {
  const renderTable = () => {
    return listCart.map((item) => (
      <tr key={item._id} className="bg-white border-b-2">
        <td
          className="p-3 text-sm text-gray-700 whitespace-nowrap truncate md:text-md align-middle"
          style={{ maxWidth: "20rem" }}
        >
          <Link to={`/detail/${item._id}`}> {item.name}</Link>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate  md:text-md align-middle">
          <img
            className="text-center m-auto"
            src={item.image}
            alt={item.name}
            width={50}
          />
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md align-middle">
          <button
            className="text-black font-bold py-1 px-4 rounded text-lg "
            onClick={() => handleUpdateQuantity(item, false)}
          >
            -
          </button>
          <span className="w-16 inline-block border-x-2 py-1 px-2 text-center">
            {item.quantity}
          </span>
          <button
            className="text-black font-bold py-1 px-4 rounded text-lg"
            onClick={() => handleUpdateQuantity(item, true)}
          >
            +
          </button>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md align-middle">
          {item.price} $
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md align-middle">
          {item.quantity * item.price} $
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md align-middle">
          <input
            type="checkbox"
            onChange={() => handleCheck(item._id)}
            checked={purchasedArr.includes(item._id)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl font-bold text-center">List of products</h1>
      <table className="w-10/12 mt-3 m-auto drop-shadow-2xl mb-24">
        <thead className="bg-gray-50 border-b-4 border-gray-300">
          <tr>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Name
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Image
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Quantity
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Unit price
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Total
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Choose buy
            </th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default TableCart;
