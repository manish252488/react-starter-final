import React from "react";
import "./index.less";
import AppBaseScreen from "../common/layout/user/AppBaseScreen";
import ChatBot from "../ChatBot";
const Home = (props) => {

  return (
    <AppBaseScreen>
     <ChatBot/>
    </AppBaseScreen>
  );
};
export default Home;
