import React from 'react';
import './DrinkButton.css';
import { toast } from 'react-toastify';

const DrinkButton = ({ thirstLevel, setThirst, changeHulbert, dead, addPointsLots }) => {

    const giveDrink = () => {

        if (thirstLevel < 1){
          dead();
        } else if ((100 - addPointsLots) < thirstLevel) {
          setThirst(100);
          toast("Ugh, Hubert feels bloated from all the drinking.");
        } else {
          setThirst(thirstLevel + addPointsLots);
          //changeHulbert();
        }

      }

    return (
        <button className='drinkBtn' onClick={() => {giveDrink();}}> </button>
    )
  }

  export default DrinkButton;