import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import PostList from "./PostList/index.jsx";
import Pagination from "./Pagination/index.jsx";
import Filter from "./Filter/index.jsx";

function Products() {
<<<<<<< HEAD
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });
  const [filters, setFilters] = useState({
    page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const totalResponse = await axios.get(
          "http://68.183.224.29:5000/api/v1/product"
        );
        const totalPages = totalResponse.data.length;
        const page = filters.page;
        const requestUrl = `http://68.183.224.29:5000/api/v1/product/?page=${page}`;
        const response = await axios.get(requestUrl);
        const responseJSON = response.data;

        const { products } = responseJSON;
        setPostList(products);
        setPagination(...pagination, totalPages);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
    setFilters({
      page: newPage,
    });
  }

  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div>
      <Filter />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
=======
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        totalRows: 1   
    });
    const [filters, setFilters] = useState({ 
        page: 1,
        sort: "",
    })

    useEffect(() => {
        async function fetchPostList() {
            try {
                const totalResponse = await axios.get('http://68.183.224.29:5000/api/v1/product');
                const totalRows = totalResponse.data.products.length;
                setPagination({...pagination, totalRows});
            } catch (error) {
                console.log('Failed to fetch product list: ', error.message);
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
                console.log('Failed to fetch post list: ', error.message);
            }
        }

        fetchPostList();
    }, [filters]);

    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
        setFilters({
            ...filters,
            page: newPage,
        })
        setPagination({...pagination, page: newPage})
    }

    function handleSortChange(option) {
        console.log('New page: ', option);
        setFilters({
            ...filters,
            page: 1,
            sort: option
        })
        setPagination({...pagination, page: 1})
    }

    return (
        <div>
            <Filter onSortChange={handleSortChange}/>
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
>>>>>>> 9d323175093deb610f90e18ac99d60778a9c1b0a
}

export default Products;
