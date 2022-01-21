import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
const CircularProgressStyled = styled(CircularProgress)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  transform: "scale(3)",
});
const Loader = () => {
  return <CircularProgressStyled />;
};

export default Loader;
