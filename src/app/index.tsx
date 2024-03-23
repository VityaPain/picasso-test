import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "../pages";

import './style.scss'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </HashRouter>
  );
}

export default App;