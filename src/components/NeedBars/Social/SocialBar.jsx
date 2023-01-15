import React from "react";
import './SocialBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialBar = ({ socialLevel, setSocial }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            /*if (socialLevel > 0 && socialLevel != 1) {
                setSocial(socialLevel => socialLevel - 2);
            } else if (socialLevel > 0 && socialLevel == 1) {

            }*/
            if (socialLevel < 2) {
                //dead
                setSocial(0);
                //setThirst(0);
                //setHunger(0);
                toast("Hulbert doesn't feel so good..");
                //clearInterval(this.interval); //doesn't work, figure out something else
            } else {
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

