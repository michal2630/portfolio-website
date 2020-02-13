import React from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Contact from './components/Contact';

function App() {
    return (
      <div className="App">
        <Header />
        <Greeting />
        <Contact />
          <p>Hello word</p>
      </div>
    );
  }
  
  export default App;