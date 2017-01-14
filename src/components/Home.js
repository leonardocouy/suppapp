import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, { toValue: 1 }).start();
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.fadeAnim }]}>
        <TouchableOpacity style={styles.btnHelp} onPress={Actions.supplyList}>
            <FAIcon style={styles.icon} name="search" size={70} color='#FFF' />
            <Text style={styles.caption}>
              Find supply spots
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={Actions.kindSelect} >
        <Icon style={styles.icon} name="food-variant" size={70} color='#FFF' />
            <Text style={styles.caption}>
              Spot a supply location
            </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon: {
    margin: 20
  },

  btnHelp: {
    flex: 1,
    backgroundColor: '#FA6900',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnRegister: {
    flex: 1,
    backgroundColor: '#69D2E7',
    alignItems: 'center',
    justifyContent: 'center'
  },

  caption: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
  },

});
