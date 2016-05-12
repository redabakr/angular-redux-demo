// import {createStore, applyMiddleware} from "redux";
import {createStore, applyMiddleware} from "redux";

// LOGGER MIDDLEWARE
const logger = store => next => action => {
  console.group(action.type);
  console.info(`dispatching`, action.type);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return next(action);
};

// AUTO MODE MIDDLEWARE
const autoMode = store => next => action => {
  let timer;

  if (action.type === 'AUTO') {
    stop();

    function stop() {
      next({type: `STOP`});
      timer = setTimeout(ready, 3000);
    }

    function ready() {
      next({type: 'READY'});
      timer = setTimeout(go, 3000)
    }

    function go() {
      next({type: 'GO'});
      timer = setTimeout(slow, 3000)
    }

    function slow() {
      next({type: 'SLOW'});
      timer = setTimeout(stop, 3000)
    }
  }

  if (action.type === 'MANUAL') {
    timer ? clearTimeout(timer) : null;
    next();
  }

  return next(action);
};

// INITIAL STATE
const initialState = {
  lights: ['red', 'yellow', 'green']
};

// TRAFFIC REDUCER
function trafficReducer(state = initialState, action):any {
  switch (action.type) {
    case 'STOP':
      return {lights: ['red']};
    case 'READY':
      return {lights: ['red', 'yellow']};
    case 'SLOW':
      return {lights: ['yellow']};
    case 'GO':
      return {lights: ['green']};
    case 'TURN_ON':
      return {lights: [action.payload]};
    default:
      return state;
  }
}

export const store = createStore(trafficReducer, applyMiddleware(autoMode, logger));
