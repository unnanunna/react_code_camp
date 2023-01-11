import React from "react";
import './DrinkButton.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DrinkButton = ({thirstLevel, setThirst}) => {

      //drink button
    const giveDrink = () => {
        if (thirstLevel <= 98 ) {
            setThirst(thirstLevel + 2);
        } else if (thirstLevel <= 99){
            setThirst(thirstLevel + 1);
        }
    }

    const notifyDrink = () => {
        if (thirstLevel >= 99 ) {
            toast("Ugh, Hubert feels bloated from all the drinking.");
        }
    }

    return (
        <button type='button'></button>
    )
}

export default DrinkButton;
/*
import React from "react";
import './HungerBar.css';

const HungerBar = ({ hungerLevel }) => {


    return (
        <div className="fullHungerBar">
            <div className="hungerLevel" style={{width: `${hungerLevel}%`}}>
                <span>{`${hungerLevel}%`}</span>
            </div>
        </div>
    )
}

export default HungerBar;
*/
