import React from "react";

const TableCartMobile = ({
  listCart,
  handleUpdateQuantity,
  handleCheck,
  purchasedArr,
}) => {
  const renderTable = () => {
    return listCart.map((item, index) => (
      <div key={index} className="border rounded-md w-10/12 p-3 my-2">
        <input type="checkbox" className="mr-3" />
        {item.name}
        <br />
        <img src={item.image} width={50} alt={item.name} />
      </div>
    ));
  };
  return (
    <div className="w-full flex flex-col items-center">
      <h1>MOBILE</h1>
      {renderTable()}
    </div>
  );
};

export default TableCartMobile;
