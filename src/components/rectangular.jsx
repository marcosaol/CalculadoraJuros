function Rectangular({ children }) {
  return (
    <div
      className="w-[45vh] h-[30vh] bg-custom-blue rounded-xl shadow-md p-[5vh] flex justify-start
    flex-wrap"
    >
      {children}
    </div>
  );
}
export default Rectangular;
