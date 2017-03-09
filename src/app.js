/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import {Router, Actions} from 'react-native-router-flux';
import { Provider } from 'react-redux';

import {scenes} from './routes';
import configureStore from './configureStore';
import getInitialState from './reducers/initial-state';

const store = configureStore(getInitialState());
export default class App extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      try {
        Actions.pop();
        return true;
      } catch (e) {
        return true;
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}
