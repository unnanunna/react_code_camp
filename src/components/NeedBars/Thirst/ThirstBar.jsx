import React from "react";
import './ThirstBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThirstBar = ({ thirstLevel, setThirst, dead }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {
            if (thirstLevel < 2) {
                setThirst(0);
                dead();
            } else {
                if (thirstLevel < 20) {
                    toast("Hulbert is thirsty, could you give them something to drink?");
                }
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