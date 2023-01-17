import React from 'react';
import './FoodButton.css';
import { toast } from 'react-toastify';
import Tooltip from "@mui/material/Tooltip";

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
      <Tooltip title="Give Hulbert food" arrow>
        <button className='foodBtn' onClick={() => {giveFood();}}> </button>
      </Tooltip>
        
    )
  }

  export default FoodButton;