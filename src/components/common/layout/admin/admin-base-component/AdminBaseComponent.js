import {
  AppBar,
  Card,
  CardContent,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import "./index.less";
import Bubbles from "../../../bubbles/Bubbles";
export default function AdminBaseComponent(props) {
  const { icon, title, rightComponents } = props;
  return (
    <div className="admin-component-root">
      <Bubbles
        width={"100%"}
        height={"100%"}
        speed={2}
        animSpeed={1}
        size={20}
        number={70}
        colors={[
          "#4CA1AF",
          "#5eaab7",
          "#70b4bf",
          "#C4E0E5",
          "#cae3e8",
          "#d0e6ea",
        ]}
      />
      <AppBar color="secondary" position="relative">
        <Toolbar>
          {icon}
          <Typography color="textSecondary">{title}</Typography>
          <div className="header-right">{rightComponents}</div>
        </Toolbar>
      </AppBar>
      <Card className="content-card">
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
}
AdminBaseComponent.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.element,
  rightComponents: PropTypes.array,
};
