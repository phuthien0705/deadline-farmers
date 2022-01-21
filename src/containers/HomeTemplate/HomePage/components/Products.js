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
        _page: 1,
        _limit: 12,
        _totalRows: 1   
    });
    const [filters, setFilters] = useState({
        _limit: 12, 
        _page: 1
    })

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await axios.get(requestUrl);
                const responseJSON = response.data;

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
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
            _page: newPage,
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