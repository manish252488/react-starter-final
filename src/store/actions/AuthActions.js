import Auth from "../../api/auth";
import {
  REMOVE_MAIL_ACCOUNT,
  SET_MAIL_ACCOUNT,
  SET_USER,
  SIGN_OUT,
} from "./actionTypes";
import { isFunction } from "../../config/Utils";
export const signUp = (data, onSuccess, onFailure) => (dispatch) => {
  Auth.signup(data)
    .then((data) => {
      if (data.code === 200) {
        let new_data = {
          user: { ...data.data },
          token: data.data.token,
        };
        delete new_data.user.token;
        dispatch({
          type: SET_USER,
          payload: new_data,
        });
        if (isFunction(onSuccess)) {
          onSuccess();
        }
      } else {
        if (isFunction(onFailure)) onFailure(data.message);
      }
    })
    .catch((err) => {
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const login = (
  data = { email: "", password: "" },
  onSuccess,
  onFailure
) => (dispatch) => {
  Auth.login(data)
    .then((data) => {
      if (data.code === 200) {
        if (isFunction(onSuccess)) {
          onSuccess();
        }
        let new_data = {
          user: { ...data.data },
          token: data.data.token,
        };
        delete new_data.user.token;
        dispatch({
          type: SET_USER,
          payload: new_data,
        });
      } else {
        if (isFunction(onFailure)) onFailure(data.message);
      }
    })

    .catch((err) => {
      if (isFunction(onFailure))
        onFailure("Please sign up before login/ try again later!");
    });
};

export const checkJWT = (onSuccess, onFailure) => (dispatch) => {
  Auth.checkAuth()
    .then((data) => {
      let new_data = {
        user: { ...data.data },
      };
      delete new_data.user.token;
      dispatch({
        type: SET_USER,
        payload: new_data,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const signOut = (onSuccess, onFailure) => (dispatch) => {
  Auth.signOut()
    .then((data) => {
      dispatch({
        type: SIGN_OUT,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const setMailAccount = (data) => {
  return (dispatch) =>
    dispatch({
      type: SET_MAIL_ACCOUNT,
      payload: data,
    });
};
export const removeMailAccount = () => {
  return (dispatch) =>
    dispatch({
      type: REMOVE_MAIL_ACCOUNT,
    });
};
