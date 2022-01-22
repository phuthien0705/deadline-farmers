import React from 'react'


const ProductImage = ({
  image
}) => {
    return image.map((item) => (
      
      <div className="details" class="flex justify-around flex-wrap px-6 py-0">
      <div className="big-img" class="max-w-xl min-w-xs overflow-hidden m-6">
        <div className="img" class="w-full h-full max-w-sm block object-cover "> 
          <img src={image.src}></img>
        </div>

      </div>
    <div className="box" class = " max-w-lg min-w-xs ">

    </div>
    </div>
      
  
))};
export default ProductImage
