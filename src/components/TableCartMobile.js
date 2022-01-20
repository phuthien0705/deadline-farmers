import React from "react";

const TableCartMobile = ({
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
          {item.price}$
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap truncate text-center md:text-md">
          {item.quantity * item.price}$
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
    <div>
      <h1>MOBILE</h1>
      <table className="w-full">
        <thead className="bg-gray-50 border-b-4 border-gray-300">
          <tr>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Tên sản phẩm
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Hình ảnh
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Số lượng
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Đơn giá
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Thành tiền
            </th>
            <th className="w-20 p-3 text-sm md:text-lg font-semibold tracking-wide text-center">
              Chọn
            </th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default TableCartMobile;
