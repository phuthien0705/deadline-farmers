import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Post.css';
import {Link} from 'react-router-dom'
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
            <ul className="post-list grid grid-cols-3 mt-5">
                {posts.map(post => (
                    <li key={post._id} className="post">
                         <Link to={`/detail/${post._id}`}>
                            <div className='post-container'>
                                <div className="post-image">
                                    <img src={post.image} alt="" />
                                </div>
                                <div className='post-info'>
                                    <h2 className='post-title'>{post.name}</h2>
                                    <h4 className='post-category'>{post.category}</h4>
                                    <h4 className='post-price'>{post.price}$</h4>
                                </div>
                            </div>
                        </Link>
                        <button className='post-add'>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;