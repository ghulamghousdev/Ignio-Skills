import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Homepage from "./components/Homepage";
import MentorDashboard from "./components/MentorComponents/MentorDashboard";
import CourseView from "./components/MentorComponents/CourseViewMentor";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import StudentDashboard from "./components/StudentComponents/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/mentor" component={MentorDashboard} />
          <Route path="/courseview" component={CourseView} />
          <Route path="/videoplayer" component={VideoPlayer} />
          <Route path="/student" component={StudentDashboard} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
