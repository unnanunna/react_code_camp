import React from "react";
import './HungerBar.css';

const HungerBar = ({ hungerLevel, setHunger }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            if (hungerLevel > 0 && hungerLevel != 1) {
                setHunger(hungerLevel => hungerLevel - 2);
            } else if (hungerLevel > 0 && hungerLevel == 1) {
                setHunger(hungerLevel => hungerLevel - 1);
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