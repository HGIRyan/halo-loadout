import React, { Component } from 'react';
import PrimaryWeapon from './components/loadout_items/primary_weapon'
import './reset.css'
import './components/loadout_items/loadout.css'
class App extends Component {
  render() {
    return (
      <div className="App">
       <PrimaryWeapon/>
      </div>
    );
  }
}

export default App;