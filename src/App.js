import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUS from "./pages/AboutUS";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <AboutUS />
    </div>
  );
}

export default App;
