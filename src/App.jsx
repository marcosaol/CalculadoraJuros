import { useState } from "react";
import Rectangular from "./components/rectangular";
import Visor from "./components/visor";
import TimeInput from "./components/timeInput";
import ValueInput from "./components/valueInput";
import GoButton from "./components/goButton";
import RateInput from "./components/rateInput";

function calculateSimpleInterest(time, value, rate) {
  let percentageRate = rate / 100;
  let interest = value * percentageRate * time;
  let finalValue = interest + Number(value);
  console.log(interest, finalValue);
  return { interest, finalValue };
}
function App() {
  const [time, setTime] = useState();
  const [value, setValue] = useState();
  const [rate, setRate] = useState();
  const [interest, setInterest] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    const { interest, finalValue } = calculateSimpleInterest(time, value, rate);
    setInterest(interest);
    setFinalValue(finalValue);
    setIsCalculated(true);
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center bg-custom-green p-10 flex-col space-y-4">
        <Rectangular>
          <TimeInput time={time} setTime={setTime} />
          <ValueInput value={value} setValue={setValue} />
          <RateInput rate={rate} setRate={setRate} />
          <GoButton handleCalculate={handleCalculate} />
        </Rectangular>
        {isCalculated && (
          <Rectangular>
            <Visor Result={`O valor de juros é ${interest}`} />
            <Visor Result={`O valor final é ${finalValue}`} />
          </Rectangular>
        )}
      </div>
    </>
  );
}

export default App;
