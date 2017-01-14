import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  DatePickerIOS,
  StyleSheet,
  Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class RegisterSupply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expiryDate: new Date(),
      name: '',
      selectedKinds: [],
    };
  }

  componentWillMount() {
    // Assign selected kinds (Scene KindSelect) to dictionary key 'selectedKinds'
    this.setState({
      selectedKinds: this.props.selectedKinds
    });
  }

  onDateChange(date) {
    this.setState({
      expiryDate: date
    });
  }

  _saveSupply() {
    const name = this.state.name;
    const selectedKinds = this.state.selectedKinds;
    const expiryDate = this.state.expiryDate.getDate();
    const now = new Date().getDate();

    /* All fields must be not null and check if date isn't in the past */
    if (name !== '' && selectedKinds.length !== 0 && expiryDate >= now) {
      Actions.supplyList();
    } else if (expiryDate <= now) {
      Alert.alert(
        'Check the Date!',
        'You cannot put a date in the past.'
      );
    } else {
      Alert.alert(
        'Ohoh!',
        'Please, make sure that you fill all fields.',
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formRegister}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Enter supply name'}
          multiline={false}
        />

        <View style={styles.expiryDateHeader}>
          <Text style={styles.titleExpiryDate}>
            Select the expiry date
          </Text>
        </View>

        <DatePickerIOS
          date={this.state.expiryDate}
          mode="date"
          onDateChange={this.onDateChange.bind(this)}
        />

        <TouchableOpacity style={styles.btnSpot} onPress={(() => { this._saveSupply(); })}>
            <Text style={styles.caption}>
              SPOT!
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  formRegister: {
    flex: 1,
    justifyContent: 'center'
  },

  input: {
    width: 250,
    color: '#555555',
    marginVertical: 20,
    padding: 10,
    height: 50,
    borderColor: '#FA6900',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },

  btnSpot: {
    backgroundColor: '#FA6900',
    marginVertical: 20,
    padding: 10,
    borderColor: '#F38630',
    borderWidth: 1,
    borderRadius: 4,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  caption: {
    color: '#FFF',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
  },

  expiryDateHeader: {
    backgroundColor: 'transparent',
    width: 250,
  },

  titleExpiryDate: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

});
