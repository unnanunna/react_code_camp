import React from "react";
import './DrinkButton.css';


const DrinkButton = ({thirstLevel}, {setThirst}, {toast}) => {

      //drink button
  const giveDrink = () => {
    setThirst(thirstLevel + 2);
    }

    const notifyDrink = () => {
    toast("Ugh, Hubert feels bloated from all the drinking.");
    }

    return (
        <button type='button' onClick={thirstLevel < 100 ? giveDrink : notifyDrink}>Drink</button>
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
