import React, { Component } from "react";
import "../styles/Hello.css";
import After from "../components/After";

export default class End extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "",
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
          <div class="mic">
            <h1>
              So, how do you do <span>now</span> ?
            </h1>
            <div id="emotions">
              <ul class="hr">
                <li>
                  <button
                    class="hello_but"
                    value=":( maybe another one ?"
                    onClick={this.clickHandler.bind(this)}
                  >
                    😭
                  </button>
                </li>
                <li>
                  <button
                    class="hello_but"
                    value=":( maybe another one ?"
                    onClick={this.clickHandler.bind(this)}
                  >
                    ☹️
                  </button>
                </li>
                <li>
                  <button
                    class="hello_but"
                    value="maybe you're still not relaxing ?"
                    onClick={this.clickHandler.bind(this)}
                  >
                    😐
                  </button>
                </li>
                <li>
                  <button
                    class="hello_but"
                    value="i'm glag that you're okay ;)"
                    onClick={this.clickHandler.bind(this)}
                  >
                    😊
                  </button>
                </li>
                <li>
                  <button
                    class="hello_but"
                    value="i'm glad that you're okay ;)"
                    onClick={this.clickHandler.bind(this)}
                  >
                    😃
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <After phrase={this.state.emotion} />
        )}
      </div>
    );
  }
}
