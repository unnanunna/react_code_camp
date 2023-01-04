
import './App.css';
import HungerBar from './components/Hunger/HungerBar';
import ThirstBar from './components/Thirst/ThirstBar';
import SocialBar from './components/Social/SocialBar';

function App() {
  const hungerLevel = '90';
  const thirstLevel = '70';
  const socialLevel = '40'

  return (
      <div className="App" >
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
          <HungerBar hungerLevel={hungerLevel}/>
          <ThirstBar thirstLevel={thirstLevel}/>
          <SocialBar socialLevel={socialLevel}/>
        </div>
      </div>
    
  );
}

export default App;
