function Rectangular({ children }) {
  return (
    <div className="w-[800px] sm:w-[300px] h-[200px] bg-custom-blue rounded-xl shadow-md p-5 flex flex-col gap-2 items-center">
      {children}
    </div>
  );
}
export default Rectangular;
