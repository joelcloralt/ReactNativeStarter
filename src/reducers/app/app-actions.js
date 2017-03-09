'use strict';

import { createDefaultRequestActions } from '../requestActionConnector';

const loginActions = createDefaultRequestActions('LOGIN');
export function login(){
  return dispatch => {
    //when calling the login action
    dispatch(loginActions.request());
    //then do something to login via an API
    //when done
    //dispatch(loginActions.success());
    //if it failed, then
    //dispatch(loginActions.failure());
  }
}
