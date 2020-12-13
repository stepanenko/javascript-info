
import { createStore } from 'redux';

const initialState = {
  tweets: [
    { id: 1, text: 'tweet 1'},
    { id: 2, text: 'tweet 2'}
  ]
};

const ADD_TWEET = 'ADD_TWEET';

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      const tweets = [...state.tweets, { id: 3, text: 'tweet 3'}];
      return { ...state, tweets };
    default:
      return state;
  }
};

export const store = createStore(tweetsReducer);

// store.subscribe(() => console.log(store.getState()));
