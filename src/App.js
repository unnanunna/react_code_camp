
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { //to-do: move button functionalities to components

  //to-do: restrain need bars from going below 0, fix thirst bar
  //to-do: notice that if bar  


  //need bar starting levels
  const[hungerLevel, setHunger] = React.useState(90);
  const[thirstLevel, setThirst] = React.useState(70);
  const[socialLevel, setSocial] = React.useState(40);


  //food button
  const giveFood = () => {
        setHunger(hungerLevel + 2); //to-do: set correct level changes to all the buttons
  }

  const notifyFood = () => {
    toast("Hulbert is going to burst!");
  }

  //snack button
  /*to-do:
  -button listener, if too many snacks have been given repeatedly --> at least hunger level goes down
  -if-case happens --> notifySnack */
  const giveSnack = () => {
    setHunger(hungerLevel + 1);
} //uses same notification as food if full

/*
const notifySnack = () => {
  toast("Hulbert feels ill from all the snacks :(");
}*/


  //drink button
  const giveDrink = () => {
    setThirst(thirstLevel + 2);
}

const notifyDrink = () => {
toast("Ugh, Hubert feels bloated from all the drinking.");
}

  //milk button
const giveMilk = () => {
    setThirst(thirstLevel - 5); //to-do: does it affect other levels too?
}

const notifyMilk = () => {
  toast("Uh-oh, are you sure that milk is good for hedgehogs?");
  }


//play button
const givePlay = () => {
  setSocial(socialLevel + 2);
}

const notifyPlay = () => {
toast("Hulbert wants some time alone...");
}

//pet button
const givePet = () => {
  setSocial(socialLevel + 1);
}

const notifyPet = () => {
  toast("Hulbert feels suffocated by your love!");
  }

//to-do: make buttons' placements dependent on need bars
  return (
      <div className="App" >
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel} setHunger={setHunger}/>
          <ThirstBar thirstLevel={thirstLevel} setThirst={setThirst}/>
          <SocialBar socialLevel={socialLevel} setSocial={setSocial}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <button type='button' onClick={hungerLevel < 100 ? giveFood : notifyFood}>Food</button>
            <button type='button' onClick={hungerLevel < 100 ? giveSnack : notifyFood}>Snack</button>

            <button type='button' onClick={thirstLevel < 100 ? giveDrink : notifyDrink}>Drink</button>
            <button type='button' onClick={thirstLevel < 100 ? giveMilk : notifyMilk}>Milk</button>

            <button type='button' onClick={socialLevel < 100 ? givePlay : notifyPlay}>Play</button>
            <button type='button' onClick={socialLevel < 100 ? givePet : notifyPet}>Pet</button>
          
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
