import React from "react";
import './HungerBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HungerBar = ({ hungerLevel, setHunger, dead, changeHulbert, sadHulbert }) => {


    React.useEffect (() => {
        const interval = setInterval(() => {
            if (hungerLevel < 2) {
                setHunger(0);
                clearInterval(interval);
                dead();
            } else {
                if (hungerLevel < 20) {
                    toast("Hulbert is starving, could you give them food?");
                    changeHulbert(sadHulbert);
                }
                setHunger(hungerLevel - 2);
            }
                
        }, 3000)
        return () => clearInterval(interval);
    }, [hungerLevel]);

    return (
        <div className="fullHungerBar">
            <div className="hungerLevel" style={{width: `${hungerLevel}%`}}></div>
        </div>
        )

}

export default HungerBar;
