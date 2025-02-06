import { useState } from "react";
import Rectangular from "./components/rectangular";
import Visor from "./components/visor";
import Input from "./components/input";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-custom-green p-[10vh]">
        <Rectangular>
          <Input
            placeholder="Digite o valor"
            type="numeric"
            width={45}
            heigth={5}
          />
          <Input placeholder="Meses" type="numeric" width={45} heigth={5} />
        </Rectangular>
      </div>
    </>
  );
}

export default App;
