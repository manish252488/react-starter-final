import React from "react";
import "./index.less";
import AppBaseScreen from "../common/layout/user/AppBaseScreen";
import ChatBot from "../ChatBot";
import { Redirect, Route, Router, Switch } from "react-router";
import Documents from "./HomeComponents/Documents";
import History from "../../@history";
const Home = (props) => {
  return (
    <AppBaseScreen>
      <ChatBot />
      <div>
        <Router history={History}>
          <Switch>
            <Route path="/home/all" component={Documents} />
            <Route path="/home/documents" component={Documents} />
            <Route path="/home/images" component={Documents} />
            <Route path="/home/drive" component={Documents} />
            <Redirect from="*" to="/home/all" />
          </Switch>
        </Router>
      </div>
    </AppBaseScreen>
  );
};
export default Home;
