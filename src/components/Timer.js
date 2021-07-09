import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Timer.css";
import herb from '../music/herb.mp3'
import kind from '../music/kind.mp3'
import red from '../music/red.mp3'
import berries from '../music/berries.mp3'



var music = "";
      
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
      sec: "00",
      TimerIsPlaying: "false",
      playPause: 0,
      timerFinished: "false",
      interval: 0,
      breath: "breath",
      songName: ""
    };
  }
  
  componentDidMount(){
    this.props.class === "herb" ? music = new Audio(herb) : this.props.class === "kind" ? music = new Audio(kind) : this.props.class === "red" ? music = new Audio(red) : music = new Audio(berries);
    music.volume = 0.2;
  }
  componentWillUnmount() {
    this.stopTimer();
  }

  clickHandler() {
    

    if(this.state.playPause === 0) {
      this.setState({ playPause: 1 });
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      this.setState({ playPause: 0 });
      this.stopTimer();
      music.pause();
    }
  }
  tick() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1,
        timerFinished: "false"
      });
      
      music.play();
      if (this.state.sec === "00" || this.state.sec === +"00") {
        this.setState({ sec: 59 });
      } else {  
        this.setState({ sec: +this.state.sec - 1 });
      }
    } else {
      this.setState({ timerFinished: true, playPause: 0 });
      this.stopTimer();
    }
    if (this.state.interval < 2) {
      this.setState({ interval: this.state.interval + 1 });
    } else {
      this.setState({ interval: 0 });
      this.setBreath();
    }
  }
  stopTimer() {
    clearInterval(this.timerID);
    this.timerID = null;
    music.pause();
  }
  setBreath() {
    if (this.state.breath === "breath") {
      this.setState({ breath: "breath out" });
    } else {
      this.setState({ breath: "breath" });
    }
  }
  returnHandler() {
    this.setState({ time: 60, sec: "00" });
  }

  render() {
    const BreathClass = this.state.breath === "breath" ? "breath_on" : "breath_off";
    const BreathOutClass = this.state.breath === "breath" ? "breath_off" : "breath_on";
    

    return (
      <div id="container" class={this.props.class}>
        <div id="tablo">
          <h1>
            {"0" + Math.floor(this.state.time / 60) + ":" + this.state.sec}
          </h1>
          <h1>{this.state.songName}</h1>
        </div>
        {this.state.playPause === 0 ? (
          <button
            onClick={this.clickHandler.bind(this)}
            value={this.props.value}
            id="play"
          >
            ▶️
          </button>
        ) : (
          <button onClick={this.clickHandler.bind(this)} value={this.props.value} id="play">
            ⏸
          </button>
        )}
        {this.state.playPause === 1 ? (
          <div>
          <h1 className={BreathClass}>inhale</h1>
          <h1 className={BreathOutClass}>exhale</h1>
          </div>
        ) : (
          ""
        )}
   
        {this.state.time === 0 ? (
          <button class="kind_but">
            <Link to="/end"> you're wholesome ;) (click me)</Link>{" "}
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
