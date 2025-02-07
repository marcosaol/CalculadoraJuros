function Rectangular({ children }) {
  return (
    <div className="h-[200px] sm:w-[200px] md:w-[400px] bg-custom-blue rounded-xl shadow-md p-5 flex flex-col gap-2">
      {children}
    </div>
  );
}
export default Rectangular;
