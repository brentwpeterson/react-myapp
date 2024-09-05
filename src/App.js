import logo from './logo.svg';
import './App.css';
import czilla from './images/Cloudzilla-logo-shadow.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      <img src={czilla} alt="Cloudzilla" />
        <p>
          Cloudzilla makes it easy to create and deploy your React Projects
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
