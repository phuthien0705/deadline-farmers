import React, { useEffect, useState } from 'react'


const ProductInfo = ({
  names,
  prices,
  decripston,
  addToCarthandler
}) => {

    return (
      <div class="">
      <div class="border-t border-black-200 w-full">
        <dl>
          
          <div class="bg-blue-200 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dd class="text-xl  font-bold text-gray-500 ">
              Name Items
            </dd>
            <dd class="mt-1 text-base  text-gray-900 sm:mt-0 sm:col-span-2 ">
              {names}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="text-xl   font-bold text-gray-500">
              Price 
            </dd>
            <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {prices}
            </dd>
          </div>
          <div class="bg-blue-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="text-xl   font-bold text-gray-500">
              About
            </dd>
            <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {decripston}  
            </dd>
          </div>
        </dl>
      </div>
      <div class="ml-30">

      <button onClick={addToCarthandler} class ="w-8 h-8 border-solid outline-none mr-1 cursor-pointer"> Add cart </button>
      </div>
      </div>
    )
};

export default ProductInfo
