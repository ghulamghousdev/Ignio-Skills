import React from "react";
import "../styles/Step.scss";

const Step = (props)=>{
    return(
        <div className={`step-container ${props.extraClass}`}>
            <div className="step">
                    <h3 className="step__heading">{"Step "}{props.number}{": "}{props.heading}</h3>
                    <p className="step__para">{props.instruction}</p>
            </div>
        </div>
    )
}

export default Step;