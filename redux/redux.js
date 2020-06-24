import { createStore } from 'redux';
import myReducers from './reducers';

// creating a store
let store = createStore(myReducers);

// simple action to increase counter
const INCREASE_COUNTER = 'INCREASE_COUNTER';

const exampleAction = {
    type: INCREASE_COUNTER,
    payload: 1
}

// action creator to increase counter in a variable amount
function increaseCounter(amount){
    return {
      type: INCREASE_COUNTER,
      payload: amount
    }
  }