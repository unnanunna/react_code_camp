import React from "react";
import './ThirstBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThirstBar = ({ thirstLevel, setThirst }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            /*if (thirstLevel > 0 && thirstLevel != 1) {
                setThirst(thirstLevel => thirstLevel - 2);
            } else if (thirstLevel > 0 && thirstLevel == 1) {
                setThirst(thirstLevel => thirstLevel - 1);
            }*/

            if (thirstLevel < 2) {
                //dead
                setThirst(0);
                //setHunger(0);
                //setSocial(0);
                toast("Hulbert doesn't feel so good..");
                //clearInterval(this.interval); //doesn't work, figure out something else
            } else {
                setThirst(thirstLevel - 2);
            }

        }, 3000)
        return () => clearInterval(interval);
    }, [thirstLevel]);


    return (
        <div className="fullThirstBar">
            <div className="thirstLevel" style={{width: `${thirstLevel}%`}}>
                <span>{`${thirstLevel}%`}</span>
            </div>
        </div>
    )
}

export default ThirstBar;