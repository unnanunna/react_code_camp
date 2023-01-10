import React from "react";
import './HungerBar.css';

const HungerBar = ({ hungerLevel }) => {


    return (
        <div className="fullHungerBar">
            <div className="hungerLevel" style={{width: `${hungerLevel}%`}}>
                <span>{`${hungerLevel}%`}</span>
            </div>
        </div>
    )
}

export default HungerBar;
