import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const TableCartMobile = ({
  listCart,
  handleUpdateQuantity,
  handleCheck,
  purchasedArr,
}) => {
  const matches = useMediaQuery("(min-width:470px)");

  const renderTable = () => {
    return listCart.map((item, index) => (
      <div
        key={index}
        className="border rounded-xl w-10/12 p-3 my-2 bg-white drop-shadow-xl"
      >
        <div className="flex  border-b-2 mb-2 pb-1">
          <div className="w-4/12">
            <span className="pr-2">Choose</span>
            <input
              type="checkbox"
              className="mr-3"
              onChange={() => handleCheck(item.id)}
              checked={purchasedArr.includes(item.id)}
            />
          </div>
          <div className="w-8/12 font-bold">
            <p>{item.name}</p>
          </div>
        </div>
        {matches ? (
          <div className="flex justify-between items-center">
            <div className="flex">
              <img src={item.image} width={50} alt={item.name} />
              <div className="ml-3">
                <p>Unit price: {item.price} $</p>
                <p>Total: {item.price * item.quantity} $</p>
              </div>
            </div>
            <div className="border h-full rounded-md flex items-center justify-center">
              <button
                className="text-black font-bold py-1 px-4 rounded text-md "
                onClick={() => handleUpdateQuantity(item, false)}
              >
                -
              </button>
              <span className="w-16 inline-block border-x-2 py-1 px-2 text-center">
                {item.quantity}
              </span>
              <button
                className="text-black font-bold py-1 px-4 rounded text-md"
                onClick={() => handleUpdateQuantity(item, true)}
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="w-4/12">
              <img src={item.image} width="100%" alt={item.name} />
            </div>
            <div className="flex flex-col w-8/12">
              <p>Unit price: {item.price} $</p>
              <p>Total: {item.price * item.quantity} $</p>
              <div className="border-2 h-full rounded-md flex items-center justify-center w-8/12">
                <button
                  className="text-black font-bold py-1 px-4 rounded text-md "
                  onClick={() => handleUpdateQuantity(item, false)}
                >
                  -
                </button>
                <span className="w-16 inline-block border-x-2 py-1 px-2 text-center">
                  {item.quantity}
                </span>
                <button
                  className="text-black font-bold py-1 px-4 rounded text-md"
                  onClick={() => handleUpdateQuantity(item, true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h1 className="text-xl font-bold">List of products</h1>
      {renderTable()}
    </div>
  );
};

export default TableCartMobile;
