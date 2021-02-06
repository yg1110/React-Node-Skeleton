import React, { lazy } from "react";
import rootReducer from "./reducer";
import ReactLoading from "react-loading";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  const store = createStore(rootReducer);
  const webSocketPage = lazy(() => import("./page/webSocket"));

  const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split("/").pop()}`;
  };

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={getBasename()}>
          <React.Suspense
            fallback={
              <ReactLoading
                type="spin"
                color="#000000"
                height={"30%"}
                width={"30%"}
              />
            }
          >
            <Switch>
              <Route exact path="/" component={webSocketPage} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
