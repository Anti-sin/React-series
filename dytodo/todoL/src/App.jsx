import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
// import "./App.css";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
    <Background/> 
    <Foreground/>
    </div>
  );
}

export default App;
