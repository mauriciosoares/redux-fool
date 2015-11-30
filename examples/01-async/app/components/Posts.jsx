import React, { Component } from 'react';
import Post from './Post.jsx'

class Posts extends Component {
  render() {
    const { posts, isFetching } = this.props;

    return (
      <div>
        {(isFetching && posts.length === 0) && this.renderLoading()}
        {(!isFetching && posts.length === 0) && this.renderEmpty()}
        {(posts.length > 0) && this.renderPosts()}
      </div>
    );
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    );
  }

  renderEmpty() {
    return (
      <div>Empty.</div>
    );
  }

  renderPosts() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map(post => <Post key={`post-${post.id}`} post={post} />)}
      </ul>
    );
  }
}

export default Posts;
