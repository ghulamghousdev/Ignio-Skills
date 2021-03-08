import React from "react";
import "../../styles/ChatBox/InfoBar.scss";
import onlineIcon from "../../assets/ChatBox/onlineIcon.png";
import closeIcon from "../../assets/ChatBox/closeIcon.png";

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="Online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/join">
          <img src={closeIcon} alt="Close" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
