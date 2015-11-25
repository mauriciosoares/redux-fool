import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker.jsx';
import Posts from '../components/Posts.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        teste
      </div>
    );
  }
}

export default App;
