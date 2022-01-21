import React, { useEffect, useState } from 'react'


function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
      <div class="">
      <div class="border-t border-black-200 w-full">
        <dl>
          
          <div class="bg-blue-200 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dd class="text-xl   font-bold text-gray-500 ">
              Name Items
            </dd>
            <dd class="mt-1 text-base  text-gray-900 sm:mt-0 sm:col-span-2 ">
              {props.name}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="text-xl   font-bold text-gray-500">
              Price
            </dd>
            <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {props.prices}
            </dd>
          </div>
          <div class="bg-blue-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="text-xl   font-bold text-gray-500">
              About
            </dd>
            <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {props.decripston}  
            </dd>
          </div>
        </dl>
      </div>
      <div class="flex justify-center">

      <button onClick={addToCarthandler} class =" border-2 bg-blue-300 mt-9 font-semibold "> click me </button>
      </div>
      </div>
    )
}

export default ProductInfo
