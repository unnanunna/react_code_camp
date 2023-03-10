
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
import deadHulbert from './images/dead.png';
import hulbertPlayed from './images/playing.png';
import hulbertPetted from './images/petted.png';
import hulbertDrunk from './images/drinking.png';
import foodIcon from './images/food_icon.png';
import waterIcon from './images/water_icon.png';
import socialIcon from './images/social_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//********Future to-do's*********
//-restart-button? --> set levels back to starting point
//-snack count resets after time

//-make ui scalable
//-sound effects?
//-difficulty levels?
//-customization (hats...)?

function App() {

  const[snackCount, setCount] = React.useState(0);  
  const[hulbert_pic, setHulbert] = React.useState(happyHulbert);

  const[hungerLevel, setHunger] = React.useState(90);
  const[thirstLevel, setThirst] = React.useState(70);
  const[socialLevel, setSocial] = React.useState(40);

  const addPointsLots = 2;
  const addPointsLess = 1;
  const removePointsLots = 5;
  const removePointsLess = 1;

  const deathAnnouncement = () => toast("Hulbert doesn't feel so good...", { autoClose: 15000 });

  const changeHulbert = ( prop ) => {
    setHulbert( prop );

    setTimeout(() => {setHulbert(happyHulbert)}, 3000);
  }

  const dead = () => {
    if ((hungerLevel <= 0) || (thirstLevel <= 0) || (socialLevel <= 0)) {
      setHunger(0);
      setThirst(0);
      setSocial(0);
      setHulbert(deadHulbert);
    }
  }

  return (
      <div className="App" >
        <div class="header">
          <h1>Hulbert the Hedgehog</h1>
        </div>
        
        <img className='hulbert' src={hulbert_pic}/>
        
        <img className ='foodIcon' src={foodIcon} />
        <img className='waterIcon' src={waterIcon} />
        <img className='socialIcon' src={socialIcon} />

        <div style={{paddingTop: '65px', paddingLeft: '100px', position: 'absolute'}}>
          <HungerBar hungerLevel={hungerLevel} setHunger={setHunger} dead={dead} changeHulbert={changeHulbert} sadHulbert={sadHulbert} deathAnnouncement={deathAnnouncement}/>
          <ThirstBar thirstLevel={thirstLevel} setThirst={setThirst} dead={dead} changeHulbert={changeHulbert} sadHulbert={sadHulbert}/>
          <SocialBar socialLevel={socialLevel} setSocial={setSocial} dead={dead} changeHulbert={changeHulbert} sadHulbert={sadHulbert}/>
        </div>
        <div style={{paddingTop: '100px', paddingLeft: '600px'}}>
            <FoodButton hungerLevel={hungerLevel} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} hulbertAte={hulbertAte}/>
            <SnackButton hungerLevel={hungerLevel} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLess={addPointsLess} removePointsLess={removePointsLess} snackCount={snackCount} setCount={setCount} hulbertAte={hulbertAte} sickHulbert={sickHulbert} />
            <DrinkButton thirstLevel={thirstLevel} setThirst={setThirst} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} hulbertDrunk={hulbertDrunk} />
            <MilkButton thirstLevel={thirstLevel} setThirst={setThirst} changeHulbert={changeHulbert} dead={dead} removePointsLots={removePointsLots} sickHulbert={sickHulbert} />
            <PlayButton  socialLevel={socialLevel} hungerLevel={hungerLevel} setSocial={setSocial} setHunger={setHunger} changeHulbert={changeHulbert} dead={dead} addPointsLots={addPointsLots} removePointsLess={removePointsLess} hulbertPlayed={hulbertPlayed} />
            <PetButton socialLevel={socialLevel} setSocial={setSocial} changeHulbert={changeHulbert} dead={dead} addPointsLess={addPointsLess} hulbertPetted={hulbertPetted} />
        </div>
        <ToastContainer className={'comment'} autoClose={2000}
        position="bottom-left" 
        hideProgressBar
        closeOnClick
        theme="light" />
      </div>
    
  );
}

export default App;
