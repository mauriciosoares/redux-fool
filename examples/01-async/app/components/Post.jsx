import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <li>
        {post.title}
      </li>
    );
  }
}

export default Post;
