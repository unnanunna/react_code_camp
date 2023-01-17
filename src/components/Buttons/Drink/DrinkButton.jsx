import React from 'react';
import './DrinkButton.css';
import { toast } from 'react-toastify';
import Tooltip from "@mui/material/Tooltip";

const DrinkButton = ({ thirstLevel, setThirst, changeHulbert, dead, addPointsLots, hulbertDrunk }) => {

    const giveDrink = () => {

        if (thirstLevel < 1){
          dead();
        } else if ((100 - addPointsLots) < thirstLevel) {
          setThirst(100);
          toast("Ugh, Hubert feels bloated from all the drinking.");
        } else {
          setThirst(thirstLevel + addPointsLots);
          
          changeHulbert(hulbertDrunk);
        }

      }

    return (
        <Tooltip title="Give Hulbert water" arrow>
            <button className='drinkBtn' onClick={() => {giveDrink();}}></button>
        </Tooltip>
    )
  }

  export default DrinkButton;