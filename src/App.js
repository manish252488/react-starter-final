import AppContext from "./AppContext";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./store";
import history from "./@history";
import AppRoute from "./navigation/AppRoute";
import routesConfig from "./navigation/RoutesConfig";
import "./App.less";
import { ThemeProvider } from "@material-ui/styles";
import theme from './theme'
function App() {
  return (
    <AppContext.Provider value={routesConfig}>
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
          <AppRoute />
          </ThemeProvider>
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
