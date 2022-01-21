import React from "react";

const TableCart = ({
  listCart,
  handleUpdateQuantity,
  handleCheck,
  purchasedArr,
}) => {
  const renderTable = () => {
    return listCart.map((item) => (
      <tr key={item.id} className="bg-white border-b-2">
        <td
          className="p-3 text-sm text-gray-700 whitespace-nowrap truncate md:text-md"
          style={{ maxWidth: "20rem" }}
          width={50}
        >
          {item.name}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
          <img src={item.image} alt={item.name} />
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
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
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
          {item.price} $
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
          {item.quantity * item.price} $
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={purchasedArr.includes(item.id)}
          />
        </td>
      </tr>
    ));
  };
  return (
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
  );
};

export default TableCart;
