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
                    <li key={post.id} className="post">
                        <img src={post.imageUrl} alt="" />
                        <h2 className='post-title'>{post.title}</h2>
                        <h4 className='post-author'>{post.author}</h4>
                        <button className='post-add'>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;