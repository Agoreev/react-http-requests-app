import React, { Component } from "react";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./Posts.css";

export default class Posts extends Component {
  state = {
    posts: [],
    slectedPostId: 0,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Artem",
          };
        });

        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/posts/" + post.id} key={post.id}>
            <Post author={post.author} title={post.title} />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}
