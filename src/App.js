import "./styles/App.css";
import Hello from "./pages/Hello";
import Blocks from "./pages/Blocks";
import End from "./pages/End";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/blocks" component={Blocks} />
          <Route exact path="/end" component={End} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
