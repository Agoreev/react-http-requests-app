import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    slectedPostId: 0
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Artem"
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  postSelectedHandler = id => {
    this.setState({ slectedPostId: id });
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          author={post.author}
          key={post.id}
          title={post.title}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost postId={this.state.slectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
