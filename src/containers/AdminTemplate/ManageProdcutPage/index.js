import React, { useEffect, useState } from "react";
import { actFetchListProduct } from "./../../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import { TablePaginationActions } from "../../../components/TablePagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "../../../components/Modal";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.green,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightTable: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    display: "table-cell",
  },
  fab: {
    margin: "0 3px",
  },
  container: {
    display: "flex",
    margin: "5px",
    justifyContent: "space-between",
    "@media(max-width: 500px)": {
      flexDirection: "column",
    },
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transform: "scale(3)",
  },
  title: {
    color: "#000",
  },
  img: {
    display: "block",
    width: "4rem",
  },
  trailer: {
    maxWidth: "4rem",
    fontSize: "0.75rem",
    overflowWrap: "break-word",
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  root: {
    fontSize: "0.75rem",
  },
}))(TableCell);
const StyledTableCellBody = withStyles((theme) => ({
  root: {
    fontSize: "0.75rem",
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const ManageProductPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [listProduct, setListProduct] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);
  const [productEdit, setProductEdit] = useState(null);
  const loading = useSelector((state) => state.productReducer.loading);
  const data = useSelector((state) => state.productReducer.data);
  console.log("re-render", data);
  useEffect(() => {
    dispatch(actFetchListProduct());
  }, []);
  useEffect(() => {
    setListProduct(data);
  }, [data]);

  //--------------------------------------------------------------------------
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //--------------------------------------------------------------------------

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (info) => {
    setOpen(info);
  };
  //--------------------------------------------------------------------------
  const handleDeleteProduct = (product) => {};
  const renderTable = () => {
    if (loading) return <CircularProgress className={classes.loading} />;
    if (listProduct === []) return "";
    if (listProduct && listProduct.length > 0)
      return (
        <div>
          <Modal
            open={open}
            closeModal={handleClose}
            productEdit={productEdit}
          />
          <div className={classes.container}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setProductEdit(null);
                handleClickOpen();
              }}
              startIcon={<AddCircleIcon />}
            >
              Add Product
            </Button>
            <TextField
              onChange={(e) => setKeyWord(e.target.value)}
              id="input-with-icon-grid"
              label="Find here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <TableContainer
            component={Paper}
            aria-label="custom pagination table"
          >
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                  <StyledTableCell align="center">Categories</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Rating</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? listProduct.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : listProduct
                ).map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCellBody component="th" scope="row">
                      {row.name}
                    </StyledTableCellBody>
                    <StyledTableCellBody align="right">
                      {row.description}
                    </StyledTableCellBody>
                    <StyledTableCellBody align="right">
                      {row.categories}
                    </StyledTableCellBody>
                    <StyledTableCellBody align="right">
                      {row.price}
                    </StyledTableCellBody>
                    <StyledTableCellBody align="right">
                      {row.rating}
                    </StyledTableCellBody>
                    <StyledTableCellBody align="right">
                      <img
                        className={classes.img}
                        src={row.image}
                        alt={row.name}
                      />
                    </StyledTableCellBody>
                    <StyledTableCellBody
                      align="right"
                      className={classes.action}
                    >
                      <Fab
                        className={classes.fab}
                        color="primary"
                        size="small"
                        onClick={() => {
                          setProductEdit(row);
                          handleClickOpen();
                        }}
                      >
                        <LightTooltip title="Edit">
                          <CreateIcon />
                        </LightTooltip>
                      </Fab>
                      <Fab
                        className={classes.fab}
                        color="secondary"
                        size="small"
                      >
                        <LightTooltip title="Delete">
                          <DeleteIcon
                            onClick={() => {
                              handleDeleteProduct(row);
                            }}
                          />
                        </LightTooltip>
                      </Fab>
                    </StyledTableCellBody>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    style={{ overflow: "visible" }}
                    rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                    colSpan={2}
                    count={listProduct.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      );
  };

  return <>{renderTable()}</>;
};

export default ManageProductPage;
