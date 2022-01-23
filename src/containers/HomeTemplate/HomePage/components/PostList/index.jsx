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
    console.log(posts)
    return (
        <div>
            <ul className="post-list grid grid-cols-2 mt-5">
                {posts.map(post => (
                    <li key={post.id} className="post">
                        <img src={post.imageUrl} alt="" />
                        <Link to={`/detail/${post.id}`}>

                        <h2 className='post-title'>{post.title}</h2>
                        </Link>
                        <h4 className='post-author'>{post.author}</h4>
                        <button className='post-add'>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;