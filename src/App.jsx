import { useState } from "react";
import Rectangular from "./components/rectangular";
import Visor from "./components/visor";
import GoButton from "./components/goButton";
import Input from "./components/input";

function calculateSimpleInterest(time, value, rate) {
  if (isNaN(time) || isNaN(value) || isNaN(rate)) {
    return alert("Erro: Insira valores válidos");
  }
  let percentageRate = rate / 100;
  let interest = value * percentageRate * time;
  let finalValue = interest + Number(value);
  console.log(interest, finalValue);
  return { interest, finalValue };
}

function calculateCompoundInterest(time, value, rate) {
  if (isNaN(time) || isNaN(value) || isNaN(rate)) {
    return alert("Erro: Insira valores válidos");
  }
  let percentageRate = rate / 100;
  let finalValue = value * Math.pow(1 + percentageRate, time);
  let interest = finalValue - value;
  return { interest, finalValue };
}

function App() {
  const [time, setTime] = useState();
  const [initialValue, setInitialValue] = useState();
  const [rate, setRate] = useState();
  const [interest, setInterest] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = (typeInterest) => {
    let interest, finalValue;
    if (typeInterest === 1) {
      ({ interest, finalValue } = calculateSimpleInterest(
        time,
        initialValue,
        rate
      ));
    } else {
      ({ interest, finalValue } = calculateCompoundInterest(
        time,
        initialValue,
        rate
      ));
    }
    setInterest(interest);
    setFinalValue(finalValue);
    setIsCalculated(true);
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center bg-custom-green p-10 flex-col space-y-4 ">
        <Rectangular>
          <Input value={time} setValue={setTime} text={"Meses"} />
          <Input
            value={initialValue}
            setValue={setInitialValue}
            text={"Valor inicial"}
          />
          <Input value={rate} setValue={setRate} text={"Juros mensal"} />
          <GoButton
            handleCalculate={handleCalculate}
            text={"Calcular juros simples"}
            typeInterest={1}
          />
          <GoButton
            handleCalculate={handleCalculate}
            text={"Calcular juros compostos"}
            typeInterest={2}
          />
        </Rectangular>
        {isCalculated && (
          <Rectangular>
            <Visor Result={`O valor de juros é R$${interest.toFixed(2)}`} />
            <Visor Result={`O valor final é R$${finalValue.toFixed(2)}`} />
          </Rectangular>
        )}
      </div>
    </>
  );
}

export default App;
