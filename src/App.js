import logo from './logo.svg';
import './App.css';
import czilla from './images/Cloudzilla-logo-shadow.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      <img width="600" src={czilla} alt="Cloudzilla" />
        <p>
          Cloudzilla makes it easy to create and deploy your React Projects
        </p>
        <a
          className="App-link"
          href="https://cloudzilla.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Cloudzilla
        </a>
      </header>
    </div>
  );
}


export default App;
