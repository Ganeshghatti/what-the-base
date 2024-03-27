import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import "./App.scss";
import Hero from "./Pages/Hero";
import Tokenomics from "./Pages/Tokenomics";
import HowToBuy from "./Pages/HowToBuy";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </BrowserRouter>
  );
}
