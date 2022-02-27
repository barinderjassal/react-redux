import { createSlice } from '@reduxjs/toolkit';

interface State {
  counter: number;
  showCounter: boolean;
}

interface Action {
  payload: any;
  type: string;
}

const initialCounterState = {
  counter: 0,
  showCounter: true
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state: State) {
      state.counter++;
    },
    decrement(state: State) {
      state.counter--;
    },
    increase(state: State, action: Action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state: State) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;
