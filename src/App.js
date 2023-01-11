
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import happyHulbert from './images/happy.png';
import hulbertAte from './images/eating.png';
import sickHulbert from './images/sick.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import DrinkButton from './components/Buttons/Drink/DrinkButton'

function App() { //to-do: move button functionalities to components

  //to-do: warning when some of the bars are below 10
  const [snackCount, setCount] = React.useState(0);  

  const[hulbert_pic, setHulbert] = React.useState(happyHulbert);

  //need bar starting levels
  const[hungerLevel, setHunger] = React.useState(90);
  const[thirstLevel, setThirst] = React.useState(70);
  const[socialLevel, setSocial] = React.useState(40);

  const changeHulbert = ( prop ) => {
    setHulbert( prop );

    setTimeout(() => {setHulbert(happyHulbert)}, 2000);
  }


  //food button
  const giveFood = () => {

    if (hungerLevel <= 98 ) {
      setHunger(hungerLevel + 2);
    } else if (98 < hungerLevel){
      setHunger(100);
    }

    changeHulbert(hulbertAte);
  }

  const notifyFood = () => {
    if (hungerLevel >= 99 ) {
      toast("Hulbert is going to burst!");
    }
  }

  //snack button
  const giveSnack = () => { //to-do: reset snackCount after some time or after pressing other buttons certain number
    setCount(snackCount + 1);

    if (snackCount > 3) {

      if(hungerLevel < 5) {
        setHunger(0)
      } else {
        setHunger(hungerLevel - 5);
      }

      changeHulbert(sickHulbert);

    } else if (hungerLevel <= 99) {
      setHunger(hungerLevel + 1);

      changeHulbert(hulbertAte);
    } else if (99 < hungerLevel) {
      setHunger(100);
    }   
}

const notifySnack = () => {

  if (snackCount > 3) {
    toast("Hulbert feels ill from all the snacks :(");
  } else if (hungerLevel >= 100 ) {
    toast("Hulbert is going to burst!");
  }

}

//drink button
const giveDrink = () => {

  if (thirstLevel <= 98 ) {
      setThirst(thirstLevel + 2);
  } else if (98 < thirstLevel){
      setThirst(100);
  }

}

const notifyDrink = () => {
  if (thirstLevel >= 99 ) {
      toast("Ugh, Hubert feels bloated from all the drinking.");
  }
}

  //milk button
const giveMilk = () => { 

    if(thirstLevel < 5) {
      setThirst(0); 
    } else {
      setThirst(thirstLevel - 5); 
    }

      changeHulbert(sickHulbert);
  }

const notifyMilk = () => {
  toast("Uh-oh, are you sure that milk is good for hedgehogs?");
  }


//play button
const givePlay = () => {

  if (socialLevel <= 98 ) {
    setSocial(socialLevel + 2);
  } else if (98 < socialLevel){
    setSocial(100);
  }

  if(hungerLevel < 2) {
    setHunger(0); 
  } else {
    setHunger(hungerLevel - 2); 
  }

}

const notifyPlay = () => {
  if (socialLevel >= 99 ) {
    toast("Hulbert wants some time alone...");
  }
}

//pet button
const givePet = () => {

  if (socialLevel <= 99 ) {
    setSocial(socialLevel + 1);
  } else if (99 < socialLevel) {
    setSocial(100);
  }

}

const notifyPet = () => {
  if (socialLevel >= 99 ) {
    toast("Hulbert feels suffocated by your love!");
  }
}

const dead = () => {
  if ((hungerLevel <= 0) || (thirstLevel <= 0) || (socialLevel)) {
    setHunger(0);
    setThirst(0);
    setSocial(0);
  }
}

const notifyHealth = () => {
  if (hungerLevel <= 10) {
    toast("Hulbert is starving, could you give them food?");
  } else if (thirstLevel <= 10) {
    toast("Hulbert is thirsty, could you give them something to drink?");
  } else if (socialLevel <= 10) {
    toast("Hulbert feels lonely, could you play with them?");
  } else if ((hungerLevel <= 0) || (thirstLevel <= 0) || (socialLevel)) {
    toast("Hulbert doesn't feel so good..")
  }
}

//to-do: make buttons' placements dependent on need bars
  return (
      <div className="App" >
        <div class="header">
          <h1>Hulbert the Hedgehog</h1>
        </div>
        <div className='hulbert'> 
          <img src={hulbert_pic}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel} setHunger={setHunger}/>
          <ThirstBar thirstLevel={thirstLevel} setThirst={setThirst}/>
          <SocialBar socialLevel={socialLevel} setSocial={setSocial}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <button className='foodBtn' onClick={() => {giveFood(); notifyFood()}}></button>
            <button className='snackBtn' onClick={() => {giveSnack(); notifySnack()}}></button>
            <button className='drinkBtn' onClick={() => {giveDrink(); notifyDrink()}}></button>
            <button className='milkBtn' onClick={() => {giveMilk(); notifyMilk()}}></button>
            <button className='playBtn' onClick={() => {givePlay(); notifyPlay()}}></button>
            <button className='petBtn' onClick={() => {givePet(); notifyPet()}}></button>
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
