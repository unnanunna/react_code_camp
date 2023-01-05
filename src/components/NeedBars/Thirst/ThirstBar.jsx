import React from "react";
import './ThirstBar.css';

const ThirstBar = ({ thirstLevel }) => {


    return (
        <div className="fullThirstBar">
            <div className="thirstLevel" style={{width: `${thirstLevel}%`}}>
                <span>{`${thirstLevel}%`}</span>
            </div>
        </div>
    )
}

export default ThirstBar;