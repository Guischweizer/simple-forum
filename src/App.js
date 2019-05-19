import React from "react";

import Home from "./Screens/Home";
import "./Stylesheets/spacing.scss";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Simple Forum" />
      <Home />
    </div>
  );
}

export default App;
