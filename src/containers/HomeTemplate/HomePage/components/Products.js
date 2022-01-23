import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import PostList from "./PostList/index.jsx";
import Pagination from "./Pagination/index.jsx";
import Filter from "./Filter/index.jsx";
function Products() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalRows: 1,
  });
  const [filters, setFilters] = useState({
    page: 1,
    sort: "",
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const totalResponse = await axios.get(
          "http://68.183.224.29:5000/api/v1/product"
        );
        const totalRows = totalResponse.data.products.length;
        setPagination({ ...pagination, totalRows });
      } catch (error) {
        console.log("Failed to fetch product list: ", error.message);
      }
    }
    fetchPostList();
  }, []);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        console.log(paramsString);
        const requestUrl = `http://68.183.224.29:5000/api/v1/product/?${paramsString}`;
        const response = await axios.get(requestUrl);
        const responseJSON = response.data;
        console.log(responseJSON);

        const { products } = responseJSON;
        setPostList(products);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
    setFilters({
      ...filters,
      page: newPage,
    });
    setPagination({ ...pagination, page: newPage });
  }

  function handleSortChange(option) {
    console.log("New page: ", option);
    setFilters({
      ...filters,
      page: 1,
      sort: option,
    });
    setPagination({ ...pagination, page: 1 });
  }

  return (
    <div>
      <Filter onSortChange={handleSortChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default Products;
