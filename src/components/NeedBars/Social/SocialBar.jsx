import React from "react";
import './SocialBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialBar = ({ socialLevel, setSocial, dead, changeHulbert, sadHulbert }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {
            if (socialLevel < 2) {
                setSocial(0);
                clearInterval(interval);
                dead();
            } else {
                if (socialLevel < 20) {
                    toast("Hulbert feels lonely, could you play with them?");
                    changeHulbert(sadHulbert);
                }
                setSocial(socialLevel - 2);
            }

        }, 3000)
        return () => clearInterval(interval);
    }, [socialLevel]);


    return (
        <div className="fullSocialBar">
            <div className="socialLevel" style={{width: `${socialLevel}%`}}></div>
        </div>
    )
}

export default SocialBar;

