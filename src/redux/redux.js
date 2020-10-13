import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const increment = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + increment
      };
    case 'DECREMENT':
      const decrement = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrement
      };
    case 'SET':
      return {
        count: action.setBY
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});
store.subscribe(() => {
  console.log(store.getState());
})
const increase = ({incrementBy = 5} = {}) => ({
    type : "INCREMENT",
    incrementBy
});
store.dispatch(increase());
  store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 3
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: "SET",
  setBY: 4
})