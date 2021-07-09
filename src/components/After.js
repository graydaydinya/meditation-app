import React, { Component } from "react";
import "../styles/After.css";
import { Link } from "react-router-dom";

export default class After extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div class="after">
            <h1>{this.props.phrase}</h1>
          </div>
        </Link>
      </div>
    );
  }
}
