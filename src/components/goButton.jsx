function GoButton({ handleCalculate, text, typeInterest }) {
  return (
    <button
      className="text-black font-medium text-[24px]"
      onClick={() => handleCalculate(typeInterest)}
    >
      {text}
    </button>
  );
}
export default GoButton;
