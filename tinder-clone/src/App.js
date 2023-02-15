import './App.css';
import Header from './Header.js'; 
import SwipeButtons from './SwipeButtons.js';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">

      <Header/>
      <TinderCards/>
      <SwipeButtons />
    </div>
  );
}

export default App;
