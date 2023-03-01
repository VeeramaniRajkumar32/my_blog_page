import { useState } from "react";
import "./app.css";
import AboutPage from "./Components/AboutPage";
import CardDin from "./Components/CardDin";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Slider from "./Components/Slider";
import FooterPage from "./Components/FooterPage";
import Navigate from "./Components/Navigate";
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden rounded-b-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ">
      <Navigate />
      <main className="flex-1 overflow-y-scroll">
          <Home />
          <AboutPage />
          <CardDin />
          <ContactSection />
          <FooterPage />
      </main>
    </div>
  );
}

export default App;
