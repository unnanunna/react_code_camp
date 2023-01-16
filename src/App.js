
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import FoodButton from './components/Buttons/Food/FoodButton';
import SnackButton from './components/Buttons/Snack/SnackButton';
import DrinkButton from './components/Buttons/Drink/DrinkButton';
import MilkButton from './components/Buttons/Milk/MilkButton';
import PetButton from './components/Buttons/Pet/PetButton';
import PlayButton from './components/Buttons/Play/PlayButton';
import happyHulbert from './images/happy.png';
import hulbertAte from './images/eating.png';
import sickHulbert from './images/sick.png';
import sadHulbert from './images/sad.png';
import hulbertPlayed from './images/playing.png';
import hulbertPetted from './images/petted.png';
import foodIcon from './images/food_icon.png';
import waterIcon from './images/water_icon.png';
import socialIcon from './images/social_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

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
        
        <img className='hulbert' src={hulbert_pic}/>
        
        <img className ='foodIcon' src={foodIcon} />
        <img className='waterIcon' src={waterIcon} />
        <img className='socialIcon' src={socialIcon} />

        <div style={{paddingTop: '90px', paddingLeft: '100px', position: 'absolute'}}>
          <HungerBar hungerLevel={hungerLevel} setHunger={setHunger}/>
          <ThirstBar thirstLevel={thirstLevel} setThirst={setThirst}/>
          <SocialBar socialLevel={socialLevel} setSocial={setSocial}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <FoodButton hungerLevel={hungerLevel} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} hulbertAte={hulbertAte}/>
            <SnackButton hungerLevel={hungerLevel} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLess={addPointsLess} removePointsLess={removePointsLess} snackCount={snackCount} setCount={setCount} hulbertAte={hulbertAte} sickHulbert={sickHulbert} />
            <DrinkButton thirstLevel={thirstLevel} setThirst={setThirst} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} />
            <MilkButton thirstLevel={thirstLevel} setThirst={setThirst} changeHulbert={changeHulbert} dead={dead} removePointsLots={removePointsLots} sickHulbert={sickHulbert} />
            <PlayButton  socialLevel={socialLevel} hungerLevel={hungerLevel} setSocial={setSocial} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} removePointsLess={removePointsLess} hulbertPlayed={hulbertPlayed} />
            <PetButton socialLevel={socialLevel} setSocial={setSocial} changeHulbert={changeHulbert} dead={dead} addPointsLess={addPointsLess} hulbertPetted={hulbertPetted} />
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
