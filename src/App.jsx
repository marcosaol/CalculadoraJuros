import { useState } from "react";
import Rectangular from "./components/rectangular";
import Visor from "./components/visor";
import GoButton from "./components/goButton";
import Input from "./components/input";

function calculateSimpleInterest(time, initialValue, periodicValue, rate) {
  if (isNaN(time) || isNaN(initialValue) || isNaN(rate)) {
    return alert("Erro: Insira valores válidos");
  }
  if (isNaN(periodicValue)) {
    periodicValue = 0;
  }

  let percentageRate = rate / 100;
  let interest = initialValue * percentageRate * time;

  let interestOnPeriodicValue = 0;
  for (let n = 1; n < time; n++) {
    interestOnPeriodicValue += periodicValue * percentageRate * n;
  }
  interest += interestOnPeriodicValue;
  let finalValue = interest + Number(initialValue) + periodicValue * (time - 1);
  return { interest, finalValue };
}

function calculateCompoundInterest(time, initialValue, periodicValue, rate) {
  if (isNaN(time) || isNaN(initialValue) || isNaN(rate)) {
    return alert("Erro: Insira valores válidos");
  }
  if (isNaN(periodicValue)) {
    periodicValue = 0;
  }

  let percentageRate = rate / 100;
  let finalValue = initialValue * Math.pow(1 + percentageRate, time);
  for (let i = 1; i <= time; i++) {
    finalValue += periodicValue * Math.pow(1 + percentageRate, time - i);
  }

  let interest = finalValue - (Number(initialValue) + periodicValue * time);
  return { interest, finalValue };
}

function App() {
  const [time, setTime] = useState();
  const [initialValue, setInitialValue] = useState();
  const [periodicValue, setPeriodicValue] = useState();
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
        periodicValue,
        rate
      ));
    } else {
      ({ interest, finalValue } = calculateCompoundInterest(
        time,
        initialValue,
        periodicValue,
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
          <Input
            value={periodicValue}
            setValue={setPeriodicValue}
            text={"Valor mensal"}
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
