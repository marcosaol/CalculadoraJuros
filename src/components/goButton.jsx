function GoButton({ handleCalculate, text, typeInterest }) {
  return (
    <button
      className="text-black font-medium w-[100%]"
      onClick={() => handleCalculate(typeInterest)}
    >
      {text}
    </button>
  );
}
export default GoButton;
