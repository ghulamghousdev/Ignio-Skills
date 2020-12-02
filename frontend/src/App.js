import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/NavBar'
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
        <Navbar />
          <Switch>
          <Route path="/user/login">
              <Login />
            </Route>
            <Route path="/user/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
