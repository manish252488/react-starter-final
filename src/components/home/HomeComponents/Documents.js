import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileThumbnail from "../../common/FileThumbnail";
import moment from "moment";
import CustomizedSpinner from "../../common/CustomizedSpinner";
export default function Documents(props) {
  const route = props.history.location.pathname;
  const access_token = useSelector(({ Auth }) => Auth.mailAccount.access_token);
  const dispatch = useDispatch();

  const getThumbnail = async (data) => {};

  return <Grid container justify="space-around"></Grid>;
}
