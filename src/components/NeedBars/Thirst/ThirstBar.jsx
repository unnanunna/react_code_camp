import React from "react";
import './ThirstBar.css';

const ThirstBar = ({ thirstLevel, setThirst }) => {

    React.useEffect (() => {
        const interval = setInterval(() => {

            if (thirstLevel > 0) {
                setThirst(thirstLevel => thirstLevel - 2);
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