import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Post.css";
import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  const [open, setOpen] = useState(false);

  const _findIndex = (id) => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    return listCart.findIndex((item) => item._id === id);
  };
  const handleAddCart = (post) => {
    const listCart = JSON.parse(localStorage.getItem("listCart"));
    if (!listCart) {
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "warning",
        title: 'Login to be able to add products to your cart :">',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
    console.log(post);
    let newListCart = [...listCart];
    const index = _findIndex(post._id);
    console.log("index", index);
    if (index !== -1) {
      newListCart[index].quantity++;
    } else {
      newListCart.push({ ...post, quantity: 1 });
    }
    setOpen(true);
    localStorage.setItem("listCart", JSON.stringify(newListCart));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <ul className="post-list grid md:grid-cols-3 mt-5 sm:grid-cols-2 grid-cols-1">
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
                  <RatingStar maxScore={5} id={post._id} rating={post.rating} />
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
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
    </div>
  );
}

export default PostList;
