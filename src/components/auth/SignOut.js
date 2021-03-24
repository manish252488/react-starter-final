import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
const SignOut = (props) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Actions.signOut());
  };
  return (
    <div onClick={logout}>{props.children ? props.children : "logout"}</div>
  );
};
export default SignOut;
