
import React, { Component } from 'react';
import StoreContext from '../storeContext';

class Header extends Component {
  static contextType = StoreContext;
  state = {
    tweets: []
  }

  componentDidMount() {
    this.context.dispatch({ type: 'ADD_TWEET' });
    console.log('state', this.context.getState());
    this.setState(this.context.getState());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React App</h1>
          <ul style={{ 'textAlign': 'start' }}>
            <li>Redux was added. Follow Mosh Redux course...</li>
            <li>Maybe add SASS and Typescript later</li>
            <li>I will use Twitter API to add my tweets to the store.</li>
          </ul>
          <span>Fake tweets:</span>
          {this.state.tweets.map(tweet =>
            <span key={tweet.id}>{tweet.text}</span>)}
        </header>
      </div >
    );
  }
}

export default Header;
