import React, { Component } from 'react';
import Post from './Post.jsx'

class Posts extends Component {
  render() {
    const { posts, isFetching } = this.props;

    return (
      <div>
        {(isFetching && posts.length === 0) && this.isLoading()}
        {(!isFetching && posts.length === 0) && this.isEmpty()}
        {(posts.length > 0) && this.showPosts()}
      </div>
    );
  }

  isLoading() {
    return (
      <div>Loading...</div>
    );
  }

  isEmpty() {
    return (
      <div>Empty.</div>
    );
  }

  showPosts() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    );
  }
}

export default Posts;
