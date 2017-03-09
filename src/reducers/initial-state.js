/**
 * ## States
 * explicitly defines initial state
 *
 */
import appInitialState from './app/app-initial-state';

const defaultState = {
  app: new appInitialState
}


function getInitialState() {
    const _initState = defaultState;
    return _initState;
}

export default getInitialState;
