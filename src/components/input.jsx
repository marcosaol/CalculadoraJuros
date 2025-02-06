function Input(props) {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      className={`w-[${props.width}] h-[${props.heigth}] rounded-md shadow`}
    ></input>
  );
}

export default Input;
