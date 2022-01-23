import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import PostList from './PostList/index.jsx'
import Pagination from './Pagination/index.jsx'
import Filter from './Filter/index.jsx'

function Products() {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1   
    });
    const [filters, setFilters] = useState({ 
        page: 1
    })

    useEffect(() => {
        async function fetchPostList() {
            try {
                const totalResponse = await axios.get('http://68.183.224.29:5000/api/v1/product');
                const totalPages = totalResponse.data.length;
                const page = filters.page;
                const requestUrl = `http://68.183.224.29:5000/api/v1/product/?page=${page}`;
                const response = await axios.get(requestUrl);
                const responseJSON = response.data;

                const { products } = responseJSON;
                setPostList(products);
                setPagination(...pagination, totalPages);
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message);
            }
        }

        fetchPostList();
    }, [filters]);

    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
        setFilters({
            page: newPage,
        })
    }

    return (
        <div>
            <Filter/>
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Products;