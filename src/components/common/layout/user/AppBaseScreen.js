import {
  AppBar,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import React, { useEffect } from "react";
import "../index.less";
import PropTypes from "prop-types";
import Logo from "../../Logo";
import { checkJWT } from "../../../../store/actions";
import { useDispatch } from "react-redux";
import SignOut from "../../../auth/SignOut";
import InputIcon from "@material-ui/icons/Input";
import Copyright from "../../Copyright";
import Loader from "../../Loader/Loader";

const AppBaseScreen = (props) => {
  const {
    children,
    footerItems,
    toolbarLeftItem,
    toolbarRightItem,
    showHeader,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkJWT(null, onFailure));
  }, [dispatch]);
  const onFailure = () => {
    History.push("/login");
  };
  return (
    <React.Fragment>
      {showHeader && (
        <AppBar>
          <Toolbar>
            <Logo />
            {toolbarLeftItem}
            <div style={{ flexGrow: 1 }}>{toolbarRightItem}</div>
            <SignOut>
              <IconButton color="inherit">
                <InputIcon color="secondary" />
              </IconButton>
            </SignOut>
          </Toolbar>
        </AppBar>
      )}
      <div className="body">
        <Loader />
        {children}
      </div>
      {/*    Footer sett*/}
      <div className="footer">
        {footerItems && footerItems}
        <Copyright />
      </div>
    </React.Fragment>
  );
};
AppBaseScreen.propTypes = {
  children: PropTypes.any,
  footerItems: PropTypes.array,
  toolbarLeftItem: PropTypes.array,
  toolbarRightItem: PropTypes.array,
  showHeader: PropTypes.bool,
};
AppBaseScreen.defaultProps = {
  showHeader: true,
};
export default AppBaseScreen;
