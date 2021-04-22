import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, removeFiles } from "../../../store/actions/files.actions";
import FileThumbnail from "../../common/FileThumbnail";
import moment from "moment";
const Base64BufferThumbnail = require("base64-buffer-thumbnail");

export default function Documents(props) {
  const route = props.history.location.pathname;
  const files = useSelector(({ files }) => files.data);
  const access_token = useSelector(({ Auth }) => Auth.mailAccount.access_token);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchFiles();
    // eslint-disable-next-line
  }, [route]);
  const fetchFiles = () => {
    dispatch(removeFiles());
    if (route.indexOf("all") !== -1) {
      dispatch(
        getFiles({
          token: access_token,
          data: {
            end_date: moment().format("MM/DD/YYYY"),
            start_date: moment().subtract(30, "days").format("MM/DD/YYYY"),
          },
        })
      );
    }
  };
  const getThumbnail = async (data) => {
    try {
      const thumbnail = await Base64BufferThumbnail(data);
      return thumbnail;
    } catch (err) {
      console.error(err);
    }
  };
  if (!files || files.length <= 0) {
    return <div>loading..</div>;
  }
  return (
    <Grid container justify="space-around">
      {files?.map((data) => (
        <Grid style={{ margin: 10 }} item>
          <FileThumbnail
            title={data.filename}
            imageLink={`data:image/jpeg;base64,${getThumbnail(
              data.attachment
            )}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
