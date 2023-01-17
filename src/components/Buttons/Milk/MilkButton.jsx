import React from 'react';
import './MilkButton.css';
import { toast } from 'react-toastify';
import Tooltip from "@mui/material/Tooltip";

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
      <Tooltip title="Give Hulbert milk" arrow>
        <button className='milkBtn' onClick={() => {giveMilk();}}> </button>
      </Tooltip>
    )
        
  }

  export default MilkButton;