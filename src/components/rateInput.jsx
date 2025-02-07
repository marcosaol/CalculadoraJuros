function RateInput({ rate, setRate }) {
  return (
    <input
      placeholder="Taxa de juros"
      type="number"
      className="rounded-md  shadow-md "
      value={rate}
      onChange={(event) => setRate(event.target.value)}
    ></input>
  );
}

export default RateInput;
