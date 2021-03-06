import React from "react";
import RegisteredCourses from "./RegisteredCourses";
import SideMenu from "./SideMenu";
import "../../styles/StudentDashboard.scss";

const Dashboard = () => {
  return (
    <div className="student-dashboard">
      <SideMenu />
      <RegisteredCourses />
    </div>
  );
};

export default Dashboard;
