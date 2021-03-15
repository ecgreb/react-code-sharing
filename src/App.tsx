import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Header1 count={count}/>
      <Header2>
        <p>
          Count = {count}
        </p>
      </Header2>
      <Header3 count={count} render={(count) => {
        return (
          <p>
            Count = {count}
          </p>
        )
      }}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Count = {count}
        </p>
        <button onClick={increment}>
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;
