import { FC, createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter-slice';

import './styles/counter.css';

interface State {
  counter: any;
  auth: any;
}

export const Counter: FC = () => {
  // gets counter state using useSelector, that takes a function as an argument and 
  // that function takes state as an argument and return desired state from there
  // Now, store.counter is actually the counter reducer in the reducer object in configureStore
  const counter = useSelector((state: State) => state.counter.counter);

  // gets showCounter
  const showCounter = useSelector((state: State) => state.counter.showCounter);

  // dispatch actions from the component using useDispatch hook provided by redux, 
  // useDispatch returns a function
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 });

    // this takes payload as { type: IDENTIFIER, paylaod: 5 }
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      {showCounter && <div className='value'>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
