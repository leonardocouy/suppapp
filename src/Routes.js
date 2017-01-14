import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import RegisterSupply from './components/RegisterSupply';
import KindSelect from './components/KindSelect';

class Rotas extends Component {

  render() {
    return (
      <Router>
        <Scene key='home' component={Home} initial styles={{ fontFamily: 'Roboto-Bold' }} title="SuppApp" />
        <Scene key='newSpot' component={RegisterSupply} title="Spot a supply location" />
        <Scene key='kindSelect' component={KindSelect} />
      </Router>
    );
  }
}

export default Rotas;
