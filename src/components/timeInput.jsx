function TimeInput({ time, setTime }) {
  return (
    <input
      placeholder="Meses"
      type="number"
      className="rounded-md  shadow-md w-[100%]"
      value={time}
      onChange={(event) => setTime(event.target.value)}
    ></input>
  );
}

export default TimeInput;
