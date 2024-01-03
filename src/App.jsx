
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
     <Welcome name='Thomas' />
     <Clock/>
     <Button/>
    </div>
  );
}

export default App
