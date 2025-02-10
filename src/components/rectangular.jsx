function Rectangular({ children }) {
  return (
    <div className="h-[250px] sm:min-w-[200px] md:min-w-[400px] bg-custom-blue rounded-xl shadow-md p-5 flex flex-col gap-2">
      {children}
    </div>
  );
}
export default Rectangular;
