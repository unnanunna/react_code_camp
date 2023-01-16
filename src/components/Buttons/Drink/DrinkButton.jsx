import React from 'react';
import './DrinkButton.css';
import { toast } from 'react-toastify';

const DrinkButton = ({ thirstLevel, setThirst, changeHulbert, dead, addPointsLots }) => {

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