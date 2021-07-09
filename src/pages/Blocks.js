import React, { Component } from "react";
import Block from "../components/Block";
import "../styles/Blocks.css";
import Timer from "../components/Timer"


export default class Blocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "herb",
      visibility: 0
    };
  }
  clickHandler(event) {
    this.setState({ emotion: event.target.value, visibility: 1 });
  }
  render() {
    return (
      <div>
      {this.state.visibility === 0 ? (
      <div id="blocks">
        <Block class="anxiety" label="anxiety" value="herb" onClick={this.clickHandler.bind(this)} />
        <Block class="apathy" label="apathy" value="red" onClick={this.clickHandler.bind(this)} />
        <Block
          class="low_concentration"
          
          label="low concentration"
          value="berries"
          onClick={this.clickHandler.bind(this)}
        />
        <Block class="anger" label="anger" value="kind" onClick={this.clickHandler.bind(this)} />
      </div>
      ) : <Timer class={this.state.emotion} value={this.state.emotion}/> }
      </div>
    );
  }
}
