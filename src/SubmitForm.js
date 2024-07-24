import React from 'react';
import logo from './logo.svg'; // Correct path to your logo.svg
import './App.css';
import SubmitForm from './SubmitForm'; // Import the SubmitForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <main>
        {/* Include the SubmitForm component */}
        <SubmitForm />
      </main>
    </div>
  );
}

export default App;
