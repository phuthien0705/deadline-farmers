import React from "react";
import PropTypes from "prop-types";
import "../../styles/Post.css";
import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";
PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;

  const _findIndex = (id) => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    return listCart.findIndex((item) => item._id === id);
  };
  const handleAddCart = (post) => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    console.log(post);
    let newListCart = [...listCart];
    const index = _findIndex(post._id);
    console.log("index", index);
    if (index !== -1) {
      newListCart[index].quantity++;
    } else {
      newListCart.push({ ...post, quantity: 1 });
    }
    localStorage.setItem("listCart", JSON.stringify(newListCart));
  };

  return (
    <div>
      <ul className="post-list grid grid-cols-3 mt-5">
        {posts.map((post) => (
          <li key={post._id} className="post">
            <Link to={`/detail/${post._id}`}>
              <div className="post-image">
                <img src={post.image} alt="" />
              </div>
              <div className="post-info">
                <h2 className="post-title">{post.name}</h2>
                <div className="post-info-desc">
                  <h4 className="post-category">Category: {post.category}</h4>
                  <RatingStar
                    maxScore={5}
                    id={post._id}
                    rating={post.rating}
                  />
                  <h4 className="post-price">Price: {post.price}$</h4>
                </div>
              </div>
            </Link>
            <button className="post-add" onClick={() => handleAddCart(post)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
