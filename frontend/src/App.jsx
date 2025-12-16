import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import ContactPage from "./Pages/ContactPage";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
