import React from 'react';
import './SnackButton.css';
import { toast } from 'react-toastify';

const SnackButton = ({ hungerLevel, setHunger, changeHulbert, dead, addPointsLess, removePointsLess, snackCount, setCount, hulbertAte, sickHulbert }) => {

    const giveSnack = () => {
        setCount(snackCount + 1);
    
        if (hungerLevel < 1){
          //hulbert is dead
          dead();
        } else if ((snackCount > 3) && (hungerLevel <= removePointsLess)) {
          setHunger(0);
          //hulbert dies
          dead();
        } else if (snackCount > 3) {
          setHunger(hungerLevel - removePointsLess);
          toast("Hulbert feels ill from all the snacks :(");
          changeHulbert(sickHulbert);
        } else if (hungerLevel > (100 - addPointsLess)) {
          setHunger(100);
          toast("Hulbert is going to burst!");
        } else {
          setHunger(hungerLevel + addPointsLess);
          changeHulbert(hulbertAte);
        }  
      }

    return (
        <button className='snackBtn' onClick={() => {giveSnack();}}> </button>
    )
  }

  export default SnackButton;