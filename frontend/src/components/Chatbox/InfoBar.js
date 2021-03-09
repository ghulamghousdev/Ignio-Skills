import React from "react";
import "../../styles/ChatBox/InfoBar.scss";
import onlineIcon from "../../assets/ChatBox/onlineIcon.png";
import closeIcon from "../../assets/ChatBox/closeIcon.png";
import {Link} from "react-router-dom";

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="Online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <Link to="/mentordashboard">
          <img src={closeIcon} alt="Close" />
        </Link>
      </div>
    </div>
  );
}

export default InfoBar;
