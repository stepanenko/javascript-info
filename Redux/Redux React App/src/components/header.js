
import React, { Component } from 'react';
import StoreContext from '../storeContext';

class Header extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React App</h1>
          <ul style={{ 'text-align': 'start' }}>
            <li>I would like to add Redux here. From Mosh Redux course.</li>
            <li>Maybe add SASS and Typescript later</li>
            <li>I will use Twitter API to add my tweets to the store.</li>
          </ul>
          <span>Fake tweets:</span>
          {this.context.tweets.map(tweet => <span key={tweet}>{tweet}</span>)}
        </header>
      </div >
    );
  }
}

export default Header;
