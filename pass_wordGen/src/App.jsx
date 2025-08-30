import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect(()=>{
  //   passwordGen()
  // },[length, numAllowed, charAllowed, passwordGen])

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-zinc-800">
        <div className="w-full text-center max-w-lg mx-auto shadow-md rounded-2xl px-4 my-8 bg-green-800  ">
          <h1 className="text-3xl mt-3 text-white font-semibold">
            Password Generator
          </h1>
          <div className="flex shadow-md rounded-lg overflow-hidden text-black mb-4">
            <input
              type="text"
              placeholder="password"
              value={password}
              className="mt-5 bg-green-200 rounded-bl-xl font-semibold rounded-tl-xl outline-none w-full py-3 px-3"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-zinc-800 hover:bg-zinc-700 shrink-0 mt-5 text-white px-3 py-3 w-20 self-center rounded-br-xl rounded-tr-xl"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex text-lg gap-x-2">
            <div className="flex text-white items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={14}
                className="cursor-pointer;"
                style={{ backgroundColor: "black" }}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>
            <div className="flex text-white items-center ml-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                className="w-5 cursor-pointer h-5"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>: Numbers</label>
            </div>
            <div className="flex items-center text-white">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                className="w-5 cursor-pointer h-5"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>: Characters</label>
            </div>
          </div>
          <button
            className="p-2 m-3 rounded-lg bg-black text-white"
            onClick={passwordGen}
          >
            Genrate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
