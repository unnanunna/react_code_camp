import React from "react";
import './SocialBar.css';

const SocialBar = ({ socialLevel, setSocial }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            if (socialLevel > 0 && socialLevel != 1) {
                setSocial(socialLevel => socialLevel - 2);
            } else if (socialLevel > 0 && socialLevel == 1) {

            }

        }, 8000)
        return () => clearInterval(interval);
    }, [socialLevel]);


    return (
        <div className="fullSocialBar">
            <div className="socialLevel" style={{width: `${socialLevel}%`}}>
                <span>{`${socialLevel}%`}</span>
            </div>
        </div>
    )
}

export default SocialBar;

