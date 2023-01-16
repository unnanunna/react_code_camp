import React from 'react';
import './PetButton.css';
import { toast } from 'react-toastify';

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
        <button className='petBtn' onClick={() => {givePet();}}> </button>
    )
  }

  export default PetButton;