import AppContext from "./AppContext";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./store";
import history from "./@history";
import AppRoute from "./navigation/AppRoute";
import routesConfig from "./navigation/RoutesConfig";
import "./App.less";
function App() {
  return (
    <AppContext.Provider value={routesConfig}>
      <Provider store={store}>
        <Router history={history}>
          <AppRoute />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
