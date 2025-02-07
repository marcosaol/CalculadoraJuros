function TimeInput({ time, setTime }) {
  return (
    <input
      placeholder="Meses"
      type="number"
      className="rounded-md  shadow-md "
      value={time}
      onChange={(event) => setTime(event.target.value)}
    ></input>
  );
}

export default TimeInput;
