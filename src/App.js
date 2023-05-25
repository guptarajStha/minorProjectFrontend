import React from "react";
import { BrowserRouter as Browser } from "react-router-dom";
import Pages from "./Pages/Pages";
function App() {
 
  return (
    <div className="App flex w-[100vw] h-[100vh] justify-center content-center items-center text-center bg-gray-300">
      <Browser>
        <Pages />
      </Browser>
    </div>
  );
}

export default App;
