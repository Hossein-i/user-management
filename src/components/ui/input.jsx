const Input = ({ label, ...props }) => {
  return (
    <label className="grid gap-2">
      <span>{label}</span>
      <input
        className="px-4 py-2 border-2 focus:border-sky-500 border-slate-300 rounded-lg outline-none"
        {...props}
      />
    </label>
  );
};

export default Input;
