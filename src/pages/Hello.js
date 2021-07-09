import React, { Component } from "react";
import "../styles/Hello.css";
import { Link } from "react-router-dom";

export default class Hello extends Component {
  render() {
    return (
      <div class="mic">
        <h1>Hello! How do you feel now ?</h1>
        <div id="emotions">
          <ul class="hr">
            <li>
              <button class="hello_but">
                <Link to="/blocks">😭</Link>
              </button>
            </li>
            <li>
              <button class="hello_but">
                <Link to="/blocks">☹️</Link>
              </button>
            </li>
            <li>
              <button class="hello_but">
                <Link to="/blocks">😐</Link>
              </button>
            </li>
            <li>
              <button class="hello_but">
                <Link to="/blocks">😊</Link>
              </button>
            </li>
            <li>
              <button class="hello_but">
                <Link to="/blocks">😃</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
