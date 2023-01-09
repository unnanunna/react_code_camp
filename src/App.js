
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { //to-do: move button functionalities to components

  //need bar starting levels
  const[hungerLevel, setHunger] = React.useState(90);
  const[thirstLevel, setThirst] = React.useState(70);
  const[socialLevel, setSocial] = React.useState(40);

  //food button
  const giveFood = () => {
        setHunger(hungerLevel + 2); //set correct level changes to all
  }

  const notifyFood = () => {
    toast("Hulbert is full!");
  }

  //snack button
  const giveSnack = () => {
    setHunger(hungerLevel + 1); //to-do: if too many snacks --> social/hunger? bars go down
} //uses same notification as food


  //drink button
  const giveDrink = () => {
    setThirst(thirstLevel + 2);
}

const notifyDrink = () => {
toast("Hulbert can't drink more!");
}

  //milk button
  const giveMilk = () => {
    setThirst(thirstLevel + 1);
}


//play button
const givePlay = () => {
  setSocial(socialLevel + 2);
}

const notifySocial = () => {
toast("Hulbert feels suffocated by your love!");
}

//pet button
const givePet = () => {
  setSocial(socialLevel + 1);
}

//to-do: make buttons' placements dependent on need bars
  return (
      <div className="App" >
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel}/>
          <ThirstBar thirstLevel={thirstLevel}/>
          <SocialBar socialLevel={socialLevel}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <button type='button' onClick={hungerLevel < 100 ? giveFood : notifyFood}>Food</button>
            <button type='button' onClick={hungerLevel < 100 ? giveSnack : notifyFood}>Snack</button>

            <button type='button' onClick={thirstLevel < 100 ? giveDrink : notifyDrink}>Drink</button>
            <button type='button' onClick={thirstLevel < 100 ? giveMilk : notifyDrink}>Milk</button>

            <button type='button' onClick={socialLevel < 100 ? givePlay : notifySocial}>Play</button>
            <button type='button' onClick={socialLevel < 100 ? givePet : notifySocial}>Pet</button>
          
        </div>
        <ToastContainer className={'comment'}
        position="bottom-left" 
        hideProgressBar
        closeOnClick
        theme="light" />
      </div>
    
  );
}

export default App;
