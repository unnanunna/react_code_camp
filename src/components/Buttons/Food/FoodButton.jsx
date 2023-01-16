import React from 'react';
import './FoodButton.css';
import { toast } from 'react-toastify';

const FoodButton = ({ hungerLevel, setHunger, changeHulbert, dead, addPointsLots, hulbertAte }) => {

    const giveFood = () => {

        if (hungerLevel < 1){
            //hubert is dead
            dead();
          } else if ((100 - addPointsLots) < hungerLevel) {
            setHunger(100);
            toast("Hulbert is going to burst!");
          } else {
            setHunger(hungerLevel + addPointsLots);
            changeHulbert(hulbertAte);
          }
    }

    return (
        <button className='foodBtn' onClick={() => {giveFood();}}> </button>
    )
  }

  export default FoodButton;