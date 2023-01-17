import React from 'react';
import './PetButton.css';
import { toast } from 'react-toastify';
import Tooltip from "@mui/material/Tooltip";

const PetButton = ({ socialLevel, setSocial, changeHulbert, dead, addPointsLess, hulbertPetted }) => {

    const givePet = () => {

        if (socialLevel < 1){
          //hulbert is dead
          dead();
        } else if ((100 - addPointsLess) < socialLevel) {
          setSocial(100);
          toast("Hulbert feels suffocated by your love!");
        } else {
          setSocial(socialLevel + addPointsLess);
          
          changeHulbert(hulbertPetted);
        }
      }

    return (
      <Tooltip title="Pet Hulbert" arrow>
        <button className='petBtn' onClick={() => {givePet();}}> </button>
      </Tooltip>
        
    )
  }

  export default PetButton;