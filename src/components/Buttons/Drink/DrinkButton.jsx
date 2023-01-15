import React from "react";
import './DrinkButton.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DrinkButton = ({thirstLevel, setThirst}) => { //to-do: how to excecute death from different file

      //drink button
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
      <button className='drinkBtn' onClick={() => {giveDrink();}}></button>
    )
}

export default DrinkButton;
/*
import React from "react";
import './HungerBar.css';

const HungerBar = ({ hungerLevel }) => {


    return (
        <div className="fullHungerBar">
            <div className="hungerLevel" style={{width: `${hungerLevel}%`}}>
                <span>{`${hungerLevel}%`}</span>
            </div>
        </div>
    )
}

export default HungerBar;
*/
