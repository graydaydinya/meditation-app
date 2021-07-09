import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Block.css";

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={this.props.link}>
        <button id="block" class={this.props.class} onClick={this.props.onClick} value={this.props.value}>
          <h1 class="label">{this.props.label}</h1>
        </button>
      </Link>
    );
  }
}
