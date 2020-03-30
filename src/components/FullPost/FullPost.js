import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate() {
    if (this.props.postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.postId)
      ) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" + this.props.postId
          )
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.postId)
      .then(response => {
        console.log(response);
      });
  };
  render() {
    const { postId } = this.props;

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (postId) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      const { title, body } = this.state.loadedPost;
      post = (
        <div className="FullPost">
          <h1>{title}</h1>
          <p>{body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
