import React, { useEffect, useState } from 'react'


function ProductImage(props) {
    const [Images, setImages] = useState([])

    
    return (
        <div class="w-3/4 h-1/3">
          <img src={Images.src}/>
        </div>
    )
}

export default ProductImage
