import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker.jsx';
import Posts from '../components/Posts.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  render() {
    const { posts, isFetching } = this.props;

    return (
      <div>
        <Posts posts={posts} isFetching={isFetching} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;

  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App);
