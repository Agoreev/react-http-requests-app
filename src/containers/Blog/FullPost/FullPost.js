import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.postId).then((response) => {
      console.log(response);
    });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Loading...</p>;

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
