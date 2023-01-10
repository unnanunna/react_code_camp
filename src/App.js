
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DrinkButton from './components/Buttons/Drink/DrinkButton'

function App() { //to-do: move button functionalities to components

  //to-do: restrain need bars from going below 0, fix thirst bar
  //to-do: if food level etc. is 99, it can go up to 101 --> fix
  const [snackCount, setCount] = React.useState(0);  

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
  const giveSnack = () => {
    setCount(snackCount + 1);
    if (snackCount > 3) {
      setHunger(hungerLevel - 5);
    } else if (hungerLevel < 100) {
      setHunger(hungerLevel + 1);
    }   
}

const notifySnack = () => {
  if (snackCount > 3) {
    toast("Hulbert feels ill from all the snacks :(");
  } else if (hungerLevel >= 100 ) {
    toast("Hulbert is going to burst!");
  }
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
  setHunger(hungerLevel - 2);
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
        <div class="header">
        <h1>Hulbert the Hedgehog</h1>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel}/>
          <ThirstBar thirstLevel={thirstLevel}/>
          <SocialBar socialLevel={socialLevel}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <button type='button' onClick={hungerLevel < 100 ? giveFood : notifyFood}>Food</button>
            <button onClick={() => {
              giveSnack();
              notifySnack();
            }}
            >
              Snack
            </button>

            <DrinkButton thirstLevel={thirstLevel} setThirst={setThirst}/>
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
