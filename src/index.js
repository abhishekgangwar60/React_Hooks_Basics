import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const ReduxApp = () => {
  return (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<ReduxApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
