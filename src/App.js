
import './App.css';
import React from 'react';
import HungerBar from './components/NeedBars/Hunger/HungerBar';
import ThirstBar from './components/NeedBars/Thirst/ThirstBar';
import SocialBar from './components/NeedBars/Social/SocialBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[hungerLevel, setHunger] = React.useState(90);
  const thirstLevel = 70;
  const socialLevel = 40;

  const giveFood = () => {
        setHunger(hungerLevel + 2);
  }

  const notify = () => {
    toast("Hulbert is full!");
  }

  return (
      <div className="App" >
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel}/>
          <ThirstBar thirstLevel={thirstLevel}/>
          <SocialBar socialLevel={socialLevel}/>
        </div>
        <div>
            <button type='button' onClick={hungerLevel < 100 ? giveFood : notify}>Food</button>
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
