function ValueInput({ value, setValue }) {
  return (
    <input
      placeholder="Valor"
      type="number"
      className="rounded-md  shadow-md "
      value={value}
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
}

export default ValueInput;
