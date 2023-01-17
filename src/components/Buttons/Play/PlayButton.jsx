import React from 'react';
import './PlayButton.css';
import { toast } from 'react-toastify';
import Tooltip from "@mui/material/Tooltip";

const PlayButton = ({ socialLevel, hungerLevel, setSocial, setHunger, changeHulbert, dead, addPointsLots, removePointsLess, hulbertPlayed }) => {

    const givePlay = () => {

        if (socialLevel < 1) {
          //hulbert is dead
          dead();
        } else if (hungerLevel < removePointsLess) {
          setHunger(0);
          dead();
          //hulbert is dead
        } else if ((100 - addPointsLots) < socialLevel) {
          setSocial(100);
          setHunger(hungerLevel - removePointsLess);
          toast("Hulbert wants some time alone...");
        } else {
          setSocial(socialLevel + addPointsLots);
          setHunger(hungerLevel - removePointsLess);
          changeHulbert(hulbertPlayed);
        }
      }

    return (
      <Tooltip title="Play with Hulbert" arrow>
        <button className='playBtn' onClick={() => {givePlay();}}> </button>
      </Tooltip>
        
    )
  }

  export default PlayButton;