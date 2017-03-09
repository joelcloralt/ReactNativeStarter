'use strict';

import React from 'react';
import {Scene, Actions, ActionConst} from 'react-native-router-flux';

//components
import Home from './components/home';

export const scenes = Actions.create(
  <Scene key="appMain" >
    <Scene key="root" type={ActionConst.REPLACE} >
      <Scene key="App" component={Home} title="Home Screen" initial={true} hideNavBar={true}  />
    </Scene>
  </Scene>
);
