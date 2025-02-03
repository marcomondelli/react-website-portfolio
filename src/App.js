import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUS from "./pages/AboutUS";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
        <AboutUS />
    </div>
  );
}

export default App;
