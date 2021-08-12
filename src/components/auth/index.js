import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../common/Tabpanel";
import Login from "./Login";
import Signup from "./Signup";
import "./index.less";
import { Card, CardContent } from "@material-ui/core";
import Logo from "../common/Logo";
import { useSelector } from "react-redux";
import History from "../../@history";
import { Lock, PersonAdd } from "@material-ui/icons";
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AuthComponent() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isAuthenticated = useSelector(({ Auth }) => Auth.isAuthenticated);
  if (isAuthenticated) {
    History.push("/");
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const RightComponent = () => (
    <div className="right-content">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<Lock />} label="Login" {...a11yProps(0)} />
          <Tab icon={<PersonAdd />} label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Signup />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
  return (
    <div className="auth-page">
      <Card className="auth-card">
        <div
          className="auth-image"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?fit=crop&h=1000&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Fbg%3D80000000%26txt%3DFree%2BStock%2BPhotos%26txtalign%3Dcenter%26txtclr%3Dfff%26txtfont%3DAvenir-Heavy%26txtpad%3D20%26txtsize%3D120%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&txtsize=60&w=1500)`,
          }}
        >
          <Logo />
        </div>

        <CardContent className="auth-card-content">
          {/*  <Bubbles width="100%" height="100%" size={5} number={80} colors={['#4CA1AF','#5eaab7','#C4E0E5','#cae3e8','#ff614f','#75c575']}/> */}
          <RightComponent />
        </CardContent>
      </Card>
    </div>
  );
}
