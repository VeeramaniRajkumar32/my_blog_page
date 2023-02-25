import { useState } from "react";
import "./app.css";
import CardDin from "./Components/CardDin";
import Example from "./Components/Example";
import Header from "./Components/Header";
import Slider from "./Components/Slider";

function App() {
  return (
    <div>
        <Header />
        <Slider />
        <CardDin />
    </div>
  );
}

export default App;
