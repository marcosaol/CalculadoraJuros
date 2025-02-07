import { useState } from "react";
import Rectangular from "./components/rectangular";
import Visor from "./components/visor";
import TimeInput from "./components/timeInput";
import ValueInput from "./components/valueInput";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-custom-green p-10">
        <Rectangular>
          <TimeInput />
          <ValueInput />
        </Rectangular>
      </div>
    </>
  );
}

export default App;
