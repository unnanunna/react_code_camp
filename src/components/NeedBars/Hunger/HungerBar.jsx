import React from "react";
import './HungerBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HungerBar = ({ hungerLevel, setHunger/*, setThirst, setSocial */}) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            /*if (hungerLevel > 0 && hungerLevel != 1) {
                setHunger(hungerLevel => hungerLevel - 2);
            } else if (hungerLevel > 0 && hungerLevel == 1) {
                setHunger(0);
            }*/
            if (hungerLevel < 2) {
                //dead
                setHunger(0);
                //setThirst(0);
                //setSocial(0);
                toast("Hulbert doesn't feel so good..");
                //clearInterval(this.interval); //doesn't work, figure out something else
            } else {
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
