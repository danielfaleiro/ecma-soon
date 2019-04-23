import React from 'react';
import logo from './img/ECMA - gold.png';
import Map from './Map';
import './App.css';
import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Site em construção. Aguarde.
        </h1>
        <div className='App-info'>
          <MdPhone size='calc(30px + 1vmin)' />
          <div>
          (62) 3926-1118 / (62) 99105-0615
          </div>
          <MdLocationOn size='calc(30px + 1vmin)' />
          <div>
            Rua 85A - Qd. F-16, Lote 13 St. Sul<br/>Goiânia - GO<br/>CEP: 74080-020
          </div>
          <MdEmail size='calc(30px + 1vmin)' />
          <div>
            <a href='mailto:raydelmm@gmail.com'>raydelmm@gmail.com</a>
          </div>
        </div>
        <Map />        
      </header>
    </div>
  );
}

export default App;
