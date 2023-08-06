import partiallyApply from "../../HOCs/partiallyApply";

const Button = ({ className, onClick, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:opacity-75 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

export const PrimaryButton = partiallyApply(Button, {
  className: "bg-sky-500 text-white",
});

export const SecondaryButton = partiallyApply(Button, {
  className: "bg-slate-300",
});
