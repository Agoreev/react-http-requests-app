import React, { Component } from "react";
//import axios from "axios";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
