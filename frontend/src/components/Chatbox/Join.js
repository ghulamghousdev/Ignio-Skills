import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/ChatBox/Join.scss";
import {connect} from "react-redux";


function Join({roomId, username}) {

  const [details, setDetails] = useState({
    name: "",
    isSet: false
  });
  const onClickHandler = async (event) => {
    event.preventDefault();
    await setDetails({
      name: username,
      isSet: true,
    });
  }
  const {name, isSet} = details; 

  if(isSet){
    return <Redirect to={`/chat?name=${name}&room=${roomId}`}/>
  }

  return (
        <button className="joinchat__btn"
          onClick={(event) => onClickHandler(event)}
        >
         Join Chat
        </button>
  );
}

const mapStateToProps =(state) => ({
  username: state.auth.user.username
})

export default connect(mapStateToProps, null)(Join);
