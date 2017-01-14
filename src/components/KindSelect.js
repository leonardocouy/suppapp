import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

/* Importing a custom icon */
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../assets/config.json';

const Icon = createIconSetFromFontello(fontelloConfig);
/* end */


export default class KindSelectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKinds: [],
      disabled: false,
      opacity: 1
    };
  }

  /* This function (selectKind) verify if selected kind (selectedKind)
  has already selected in kinds array(selectedKinds).

  Variables:

  selectedKinds - List of Kinds
  i - Index of Selected Kind

  */

  _selectKind(selectedKind) {
    const selectedKinds = this.state.selectedKinds;
    const i = selectedKinds.indexOf(selectedKind);

    // Check if user selects a kind that exists in array, the kind will be unselect.
    if (i === -1) {
      selectedKinds.push(selectedKind);
    } else {
      selectedKinds.splice(i, 1);
      this.setState({
        opacity: 1,
      });
    }

    this.setState({
      selectedKinds
    });
  }

  // Change opacity according to selected kind (selected and unselected).
  _changeOpacity(selectedKind) {
    // if kind is selected change opacity to 0.3
    if (this.state.selectedKinds.indexOf(selectedKind) !== -1) return 0.3;
    // else change opacity to normal (1)
    return 1;
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>
            Choose one or more kind of supply
          </Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity
            style={[styles.btnProtein, { opacity: this._changeOpacity('Protein') }]}
            onPress={() => { this._selectKind('Protein'); }}
          >
              <Icon style={styles.icon} name="meat" size={60} color='#773F3A' />
              <Text style={styles.caption}>
                Protein
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            style={[styles.btnCarbohydrate, { opacity: this._changeOpacity('Carbohydrate') }]}
            onPress={() => { this._selectKind('Carbohydrate'); }}
          >
              <Icon style={styles.icon} name="loaf-of-bread" size={60} color='#D99F4C' />
              <Text style={styles.caption}>
                Carbohydrate
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            style={[styles.btnVitamin, { opacity: this._changeOpacity('Vitamin') }]}
            onPress={() => { this._selectKind('Vitamin'); }}
          >
              <Icon style={styles.icon} name="apple" size={60} color='#D13834' />
              <Text style={styles.caption}>
                Vitamin
              </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btnSpot}
            onPress={() => Actions.newSpot({ selectedKinds: this.state.selectedKinds })}
          >
            <Text style={styles.btnSpotCaption}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38630',
    alignItems: 'center',

  },

  header: {
    marginVertical: 30,
  },

  title: {
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
    fontSize: 20,
    marginTop: 40
  },

  options: {
    flex: 1,
    justifyContent: 'space-between',
  },

  btnProtein: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FA6900',
    width: 130,
    height: 130,
  },

  btnCarbohydrate: {
    alignItems: 'center',
    backgroundColor: '#69D2E7',
    width: 130,
    height: 130,
  },


  btnVitamin: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FA6900',
    width: 130,
    height: 130,
  },

  btnSpot: {
    backgroundColor: '#FA6900',
    margin: 30,
    padding: 10,
    borderColor: '#F38630',
    borderWidth: 1,
    borderRadius: 4,
    width: 250,
    height: 55,
    alignItems: 'center'
  },

  btnSpotCaption: {
    color: '#FFF',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
  },

  caption: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },

  icon: {
    margin: 15,
  },

  checked: {
    marginTop: 50,
    marginLeft: 100

  }


});
