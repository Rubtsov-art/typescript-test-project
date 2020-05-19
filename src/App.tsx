import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  // type string ================
  const hello: string = 'hello';

  //type in arrow function ======

  const greeting =( text: string) => {
    alert(text)
  }

  greeting(hello)

  //type of obj ================

  type person = {
    sayName?: (name: string) => void
    name: string,
    age: number,
    address?: {
      country: string,
      city: string
    }
  }

  const firstPerson: person = {
    sayName (name: string) {alert(name)},
    name: 'Alex',
    age: 28,
    address: {
      country: 'Russia',
      city: 'Moscow'
    }
  }

  const secondPerson: person = {
    name: 'Alexandra',
    age: 26,
  }


//===========================================

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
