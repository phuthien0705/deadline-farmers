import React, { useState, useEffect, memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  actAddProduct,
  actUpdateProduct,
  actFetchListProduct,
} from "../redux/actions/productAction";
const useStyles = makeStyles({
  input: {
    margin: "10px 0",
  },
});
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const Modal = ({ open, productEdit, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    image: "",
  });
  const [error, setError] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    image: "",
  });
  const [validation, setValidation] = useState(false);
  useEffect(() => {
    if (productEdit) {
      setInput({
        ...input,
        name: productEdit.name,
        description: productEdit.description,
        category: productEdit.category,
        price: productEdit.price,
        rating: productEdit.rating,
        image: productEdit.image,
      });
      setValidation(true);
    } else {
      setInput({
        name: "",
        description: "",
        category: "",
        price: "",
        rating: "",
        image: "",
      });
      setValidation(false);
    }
    setError({
      name: "",
      description: "",
      category: "",
      price: "",
      rating: "",
      image: "",
    });
  }, [open]);

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = Number(input.price);
    const rating = Number(input.rating);
    let data = {
      ...input,
      price,
      rating,
    };
    if (productEdit) {
      data = { ...data, id: productEdit._id };
      console.log("type of img", typeof data.image);
      let form_data = new FormData();
      for (const i in data) {
        console.log(i, data[i]);
        form_data.append(i, data[i]);
      }
      console.log(form_data);
      actUpdateProduct(form_data, productEdit._id)
        .then((res) => {
          Swal.fire(
            "Update product successfully",
            "Press ok to exit!",
            "success"
          );
          dispatch(actFetchListProduct());
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let form_data = new FormData();
      for (const i in data) {
        form_data.append(i, data[i]);
      }
      actAddProduct(form_data)
        .then((res) => {
          Swal.fire(
            "Create product successfully",
            "Press ok to exit!",
            "success"
          );
          dispatch(actFetchListProduct());
        })
        .catch((error) => {
          console.log(error);
        });
    }

    handleClose();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "image") {
      const file = e.target.files[0];
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
    if (name === "image") {
      setInput({ ...input, image: e.target.files[0] }, console.log(input));
    } else
      setInput({
        ...input,
        [name]: value,
      });
  };
  const handleError = (e) => {
    const { name, value } = e.target;
    let mess = "";
    mess = value === "" ? name + " cannot be blank" : "";
    switch (name) {
      case "price":
        if (value && !value.match("[+-]?[0-9]+(.[0-9]+)?([Ee][+-]?[0-9]+)?")) {
          mess = "Please enter only numbers";
        }
        break;
      case "rating":
        if (value && !value.match("[+-]?[0-9]+(.[0-9]+)?([Ee][+-]?[0-9]+)?")) {
          mess = "Please enter only numbers";
        }
        if (value && (Number(value) > 5 || Number(value) < 0)) {
          mess = "The value of rating must be between 0 and 5";
        }
        break;

      default:
        break;
    }
    setError({
      ...error,
      [name]: mess,
    });
    const { description, category, price, rating, image } = input;
    if (input.name && description && category && price && rating && image)
      setValidation(true);
    else setValidation(false);
  };
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {productEdit ? "Edit product" : " Add product"}
        </DialogTitle>
        <DialogContent dividers>
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            encType="multipart/form-data"
          >
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              value={input.name}
              fullWidth
              className={classes.input}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              name="name"
              onKeyUp={handleError}
              onBlur={handleError}
              error={error.name !== ""}
              helperText={error.name}
            />
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              value={input.description}
              fullWidth
              className={classes.input}
              id="outlined-multiline-static"
              label="Description"
              variant="outlined"
              onChange={handleChange}
              name="description"
              onKeyUp={handleError}
              onBlur={handleError}
              error={error.description !== ""}
              helperText={error.description}
              multiline
              rows={4}
            />
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              value={input.category}
              fullWidth
              className={classes.input}
              id="outlined-multiline-static"
              label="Category"
              variant="outlined"
              onChange={handleChange}
              name="category"
              onKeyUp={handleError}
              onBlur={handleError}
              error={error.category !== ""}
              helperText={error.category}
              select
            >
              <MenuItem value="literature">Literature</MenuItem>
              <MenuItem value="economic">Economic</MenuItem>
              <MenuItem value="children">Children</MenuItem>
              <MenuItem value="life-skill">Life Skill</MenuItem>
              <MenuItem value="foreign-language">Foreign Language</MenuItem>
            </TextField>
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              value={input.price}
              fullWidth
              className={classes.input}
              id="outlined-multiline-static"
              label="Price"
              variant="outlined"
              onChange={handleChange}
              name="price"
              onKeyUp={handleError}
              onBlur={handleError}
              error={error.price !== ""}
              helperText={error.price}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              name="image"
              onChange={handleChange}
            />
            {avatar && <img src={avatar.preview} alt="" width={80} />}
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              value={input.rating}
              fullWidth
              className={classes.input}
              id="outlined-multiline-static"
              label="Rating"
              variant="outlined"
              onChange={handleChange}
              name="rating"
              onKeyUp={handleError}
              onBlur={handleError}
              error={error.rating !== ""}
              helperText={error.rating}
            />

            <div className="mt-2">
              {productEdit ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!validation}
                >
                  Save changes
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!validation}
                >
                  Add product
                </Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default memo(Modal);
