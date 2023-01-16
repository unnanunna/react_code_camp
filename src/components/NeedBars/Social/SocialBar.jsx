import React from "react";
import './SocialBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialBar = ({ socialLevel, setSocial, dead }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {
            if (socialLevel < 2) {
                setSocial(0);
                dead();
                //toast("Hulbert doesn't feel so good..");
            } else {
                if (socialLevel < 20) {
                    toast("Hulbert feels lonely, could you play with them?");
                }
                setSocial(socialLevel - 2);
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

