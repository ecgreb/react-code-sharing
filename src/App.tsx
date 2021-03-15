import React, { useMemo, useRef, useState } from 'react';
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
  const ref = useRef(0);
  const render = useMemo(() => {
    return (count: number) => {
      ref.current++;
      console.log('Render Prop render count = ' + ref.current);
      return (
        <p>
          Count = {count}
        </p>
      )
    }
  }, [count]);

  return (
    <div className="App">
      <Header1 count={count}/>
      <Header2>
        <p>
          Count = {count}
        </p>
      </Header2>
      <Header3 count={count} render={render}/>
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
