
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

  const addPointsLots = 2;
  const addPointsLess = 1;
  const removePointsLots = 5;
  const removePointsLess = 1;

  const changeHulbert = ( prop ) => {
    setHulbert( prop );

    setTimeout(() => {setHulbert(happyHulbert)}, 2000);
  }


  //food button
  const giveFood = () => {
    if (hungerLevel < 1){
      //hubert is dead
      dead();
    } else if ((100 - addPointsLots) < hungerLevel) {
      setHunger(100);
      toast("Hulbert is going to burst!");
    } else {
      setHunger(hungerLevel + addPointsLots);
      changeHulbert(hulbertAte);
    }
  }

  //snack button
  const giveSnack = () => { //to-do: reset snackCount after some time or after pressing other buttons certain number
    setCount(snackCount + 1);

    if (hungerLevel < 1){
      //hulbert is dead
      dead();
    } else if ((snackCount > 3) && (hungerLevel <= removePointsLess)) {
      setHunger(0);
      //hulbert dies
      dead();
    } else if (snackCount > 3) {
      setHunger(hungerLevel - removePointsLess);
      toast("Hulbert feels ill from all the snacks :(");
      changeHulbert(sickHulbert);
    } else if (hungerLevel > (100 - addPointsLess)) {
      setHunger(100);
      toast("Hulbert is going to burst!");
    } else {
      setHunger(hungerLevel + addPointsLess);
      changeHulbert(hulbertAte);
    }  
  } 

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

  //milk button
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

//play button
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
      //setHulbert
    }
  }

//pet button
  const givePet = () => {

    if (socialLevel < 1){
      //hulbert is dead
      dead();
    } else if ((100 - addPointsLess) < socialLevel) {
      setSocial(100);
      toast("Hulbert feels suffocated by your love!");
    } else {
      setSocial(socialLevel + addPointsLess);
      //setHulbert
    }
  }

  const dead = () => {
    if ((hungerLevel <= 0) || (thirstLevel <= 0) || (socialLevel)) {
      toast("Hulbert doesn't feel so good..");
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
            <button className='foodBtn' onClick={() => {giveFood()}}></button>
            <button className='snackBtn' onClick={() => {giveSnack();}}></button>
            <button className='drinkBtn' onClick={() => {giveDrink();}}></button>
            <button className='milkBtn' onClick={() => {giveMilk();}}></button>
            <button className='playBtn' onClick={() => {givePlay();}}></button>
            <button className='petBtn' onClick={() => {givePet();}}></button>
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
