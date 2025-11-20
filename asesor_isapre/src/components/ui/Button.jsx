// src/components/ui/Button.jsx
const baseClasses =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600 disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-sky-600 text-white hover:bg-sky-700",
  outline: "border border-sky-600 text-sky-700 hover:bg-sky-50",
  ghost: "text-sky-700 hover:bg-sky-50",
};

const sizes = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
