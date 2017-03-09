'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Map} from 'immutable';


/**
 * actionConnector takes a React Component and an array of actions and uses
 * React Redux's connect to bind the actions to a dispatcher and maps the state
 * and actions to the component's props.
 *
 * Example use:
 * import * as myActions from './reducers/my/actions'
 *
 * class Widget extends React.Component {
 *  render() {...}
 * }
 *
 * export default actionConnector(Widget, [myActions]);
 */
export default function (Component, actions) {
  //Save the state
  function mapStateToProps(state) {
    return {
        ...state
    };
  };

  // Bind all the functions from the `actions` and bind them with `dispatch`
  function mapDispatchToProps(dispatch) {
    const creators = Map()
            .merge(...actions)
            .filter(value => typeof value === 'function')
            .toObject();

    // At this point creators is a giant object containing each action name and
    // the function for it.
    return {
      actions: bindActionCreators(creators, dispatch),
      dispatch
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
