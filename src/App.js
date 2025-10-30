import logo from './logo.svg';
import './App.css';
import Anything from './Anything';
import Anything2 from './Anything2';
import Anything3 from './Anything3';
import Anything4 from './Anything4';
import Anything5 from './Anything5';
import A from './A';
import { useState } from 'react';

function App() {
  //let val=0;
  let [val,setVal]=useState(0);
  const handleDecrement=()=>{
    setVal(val-1);
    console.log(val);
  }
  const handleIncrement=()=>{
    SetVal(val+1);
    console.log(val);
  }
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <div className="counter">
        <p>{val}</p>
        <div className="btnContainer">
          <button className="inc" onClick={handleIncrement}>INC</button>
          <button className="Dec" onClick={handleDecrement}>DEC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
