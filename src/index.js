import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={"Loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
