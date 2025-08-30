import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2 h-20 text-2xl font-semibold">
        <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white/30 rounded-full px-3 py-2">
          <button
            className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("red");
            }}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none text-white px-4 bg-green-700 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("green");
            }}
            // style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("black");
            }}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            className="outline-none text-black px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("pink");
            }}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none text-black px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("gray");
            }}
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            className="outline-none text-black px-4 py-1 rounded-full shadow-lg"
            onClick={() => {
              setColor("orange");
            }}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
