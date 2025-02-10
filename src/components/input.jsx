function Input({ value, setValue, text }) {
  return (
    <input
      placeholder={text}
      type="number"
      className="rounded-md  shadow-md w-[100%]"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
}

export default Input;
