import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice } from './authentication-slice';
import { counterSlice } from './counter-slice';

// merge all slice reducers in the configureStore object
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer
  } 
});

// export const store = createStore(counterSlice.reducer);
