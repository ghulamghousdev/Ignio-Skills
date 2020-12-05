import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SignUp";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
