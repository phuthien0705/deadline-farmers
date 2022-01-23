import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Post.css';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [], 
}

function PostList(props) {
    const {posts} = props;
    
    return (
        <div>
            <ul className="post-list grid grid-cols-2 mt-5">
                {posts.map(post => (
                    <li key={post._id} className="post">
                        <img src={post.image} alt="" />
                        <h2 className='post-title'>Name: {post.name}</h2>
                        <h4 className='post-author'>Price: {post.price}</h4>
                        <button className='post-add'>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;