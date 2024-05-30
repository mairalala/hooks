import logo from './logo.svg';
import './App.css';
import First from './Components/First';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hook useState</h2>
        <First/>
      </header>
    </div>
  );
}

export default App;
