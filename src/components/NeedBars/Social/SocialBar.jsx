import React from "react";
import './SocialBar.css';

const SocialBar = ({ socialLevel }) => {


    return (
        <div className="fullSocialBar">
            <div className="socialLevel" style={{width: `${socialLevel}%`}}>
                <span>{`${socialLevel}%`}</span>
            </div>
        </div>
    )
}

export default SocialBar;