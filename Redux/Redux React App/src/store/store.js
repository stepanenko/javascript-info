
import { createStore } from 'redux';

const initialState = {
  tweets: [
    { id: 1, text: 'tweet 1' },
    { id: 2, text: 'tweet 2' }
  ]
};

const ADD_TWEET = 'ADD_TWEET';
let lastId = 2;

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      const newTweet = { id: lastId + 1, text: action.payload.text };
      const tweets = [...state.tweets, newTweet];
      return { ...state, tweets };
    default:
      return state;
  }
};

export const store = createStore(tweetsReducer);

// store.subscribe(() => console.log(store.getState()));
