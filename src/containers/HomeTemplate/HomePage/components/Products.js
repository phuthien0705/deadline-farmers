import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import PostList from "./PostList/index.jsx";
import Pagination from "./Pagination/index.jsx";
import Filter from "./Filter/index.jsx";

var defaultTotalRows = 0;

function Products(searchProps) {
  const { searchFilters } = searchProps;
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
    async function fetchProductsList() {
      try {
        const totalResponse = await axios.get(
          "http://68.183.224.29:5000/api/v1/product"
        );
        defaultTotalRows = totalResponse.data.products.length;
        setPagination({ ...pagination, totalRows: defaultTotalRows });
      } catch (error) {
        console.log("Failed to fetch product list: ", error.message);
      }
    }
    fetchProductsList();
  }, []);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://68.183.224.29:5000/api/v1/product/?${paramsString}`;
        const response = await axios.get(requestUrl);
        const responseJSON = response.data;

        const { products } = responseJSON;
        setPostList(products);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  useEffect(() => {
    async function fetchSearchPostList() {
      try {
        const paramsString = queryString.stringify(searchFilters);
        const requestUrl = `http://68.183.224.29:5000/api/v1/product/search?${paramsString}`;
        const response = await axios.get(requestUrl);
        const responseJSON = response.data;

        const { res } = responseJSON;
        const resLength = res ? res.length : 0;
        setPostList(res);
        setPagination({ page: 1, totalRows: resLength });
      } catch (error) {
        setPagination({ page: 1, totalRows: defaultTotalRows });
        setFilters({...filters, page: 1});
      }
    }

    fetchSearchPostList();
  }, [searchFilters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    });
    setPagination({ ...pagination, page: newPage });
  }

  function handleSortChange(option) {
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
