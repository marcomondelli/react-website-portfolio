import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import Nav from "./components/Nav";
import AboutUS from "./pages/AboutUS";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Route, Routes, useLocation } from "react-router-dom";
//Animations
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutUS />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
