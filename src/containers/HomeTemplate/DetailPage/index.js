import axios from "axios";
import React, {useEffect,useState} from "react";

const DetailPage = (props) => {
  // CALL API mà chưa bt call sao nè
  const [Items , setItems ] = useState()
  
  const getData = async () =>{
    try{
      //lúc này là gán giá trị từ các data lấy dc nè
      const res = await axios.get("./:id") 
      const resJSON = await res.json();
      //sau đó trả ngược về lại để set
      const {data} = resJSON;
      setItems(data);
  }
  catch(err){
    console.error(err);
  };
}
  //sử dụng nó ^^
  useEffect(()=>{
    getData();
  })

  //Render JS DOM ra nè
  return <div class="bg-white shadow overflow-hidden sm:rounded-lg">
   ( /*(Phần 1, khúc đầu và cái ảnh)*/)
  <div class="px-4 py-5 sm:px-6 text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Iterm name
    </h3>
    (//cái ảnh có cái div để dễ chia)
     <div class="flex justify-center">
     
  <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="{props.name}" class=" w-1/4 mt-4 lg:mt-0 lg:row-span-3 "></img>
  
  </div>
  (//đây là phần thông tin thêm có chi tiết ra)
  <div class="flex justify-center">
  <div class="border-t border-gray-200 w-1/2">
    <dl>
      <div></div>
      <div class="bg-blue-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex justify-center">
        <dd class="text-sm font-medium text-gray-500 ">
          Name Iterm
        </dd>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
          SomeThing....
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dd class="text-sm font-medium text-gray-500">
          Price
        </dd>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Props.Price
        </dd>
      </div>
      <div class="bg-blue-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dd class="text-sm font-medium text-gray-500">
          About
        </dd>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Decription..................  
        </dd>
      </div>
    </dl>
  </div>
  </div>
  </div>
  <div class="flex space-x-4 mb-5 text-sm font-medium ">
      <div class="flex-auto flex space-x-4 justify-center">
        <button class="h-10 px-6 font-semibold rounded-full bg-blue-600 text-white mt-12 ml-50%  " type="submit">
          Buy now
        </button>
        
      </div>
</div>
</div>
};

export default DetailPage;
