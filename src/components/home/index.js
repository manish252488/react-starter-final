import React from "react";
import "./index.less";
import AppBaseScreen from "../common/layout/user/AppBaseScreen";
import ChatBot from "../ChatBot";
import { Route, Router, Switch } from "react-router";
import Documents from "./HomeComponents/Documents";
import History from "../../@history";
const Home = (props) => {
  return (
    <AppBaseScreen>
      <ChatBot />
      <div>
        <Router history={History}>
          <Switch>
            <Route path="/home/documents" component={Documents} />
          </Switch>
        </Router>
      </div>
    </AppBaseScreen>
  );
};
export default Home;
