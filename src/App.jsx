import { useState } from "react";
import Rectangular from "./components/rectangular";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-custom-green p-[10vh]">
        <Rectangular />
      </div>
    </>
  );
}

export default App;
