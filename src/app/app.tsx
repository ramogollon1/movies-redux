import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import PageNotFound from "../pages/PageNotFound";
import store from "../redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:slug" component={MovieDetails} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
