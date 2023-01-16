import React from 'react';
import './MilkButton.css';
import { toast } from 'react-toastify';

const MilkButton = ({ thirstLevel, setThirst, changeHulbert, dead, removePointsLots, sickHulbert }) => {

    const giveMilk = () => { 

        if(thirstLevel <= removePointsLots) {
          //hulbert is dead or stays dead
          setThirst(0); 
          dead();
        } else {
          setThirst(thirstLevel - removePointsLots); 
          toast("Uh-oh, are you sure that milk is good for hedgehogs?");
          changeHulbert(sickHulbert);
        } 
      }

    return (
        <button className='milkBtn' onClick={() => {giveMilk();}}> </button>
    )
  }

  export default MilkButton;