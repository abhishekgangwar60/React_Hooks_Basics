import React, { Component } from "react";
import ThemeSelector from "./Components/ThemeSelector";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div style={{ textAlign: "center", marginTop: "3%" }}>
          <h1>This App is a demo for react hooks</h1>
          <ThemeSelector />
        </div>
      </div>
    );
  }
}

export default App;
