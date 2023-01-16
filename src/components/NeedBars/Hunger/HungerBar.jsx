import React from "react";
import './HungerBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HungerBar = ({ hungerLevel, setHunger, dead }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {
            if (hungerLevel < 2) {
                setHunger(0);
                dead();
                //toast("Hulbert doesn't feel so good..");
            } else {
                if (hungerLevel < 20) {
                    toast("Hulbert is starving, could you give them food?");
                }
                setHunger(hungerLevel - 2);
            }
                
        }, 3000)
        return () => clearInterval(interval);
    }, [hungerLevel]);

    return (
        <div className="fullHungerBar">
            <div className="hungerLevel" style={{width: `${hungerLevel}%`}}>
                <span>{`${hungerLevel}%`}</span>
            </div>
        </div>
        )

}

export default HungerBar;
