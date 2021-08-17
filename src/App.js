import Form from './Form.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Let's Get All Of Your Information!
        </h1>
    
      </header>
      <Form/>
    </div>
  );
}

export default App;
