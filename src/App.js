import React, { Component } from "react";

import Drawer from "react-infinite-drawer";
import { data } from "./mock";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <div style={{ height: "50%", width: "70%" }}>
          <Drawer dataSource={data} />
        </div>
      </div>
    );
  }
}

export default App;
