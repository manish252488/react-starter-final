import files from "../../api/files";
import { isFunction } from "../../config/Utils";
import { CLEAR_FILES, SET_FILES } from "./actionTypes";
/* {
        start_date: start_date,
        end_date: end_date,
        file_name: file_name,
        file_size: file_size,
        file_type: file_type,
      } */
export const getFiles = ({ token = "", data = {} }, onSuccess, onFailure) => {
  return (dispatch) =>
    files
      .getFiles(token, data)
      .then((res) => {
        console.log(res);
        if (res.code === 200) {
          dispatch({
            type: SET_FILES,
            payload: res.data,
          });
          if (isFunction(onSuccess)) onSuccess();
        } else {
          if (isFunction(onFailure)) onFailure();
        }
      })
      .catch((err) => {
        console.log("error fetching files!", err);
        if (isFunction(onFailure)) onFailure();
      });
};

export const removeFiles = () => {
  return (dispatch) =>
    dispatch({
      type: CLEAR_FILES,
    });
};
