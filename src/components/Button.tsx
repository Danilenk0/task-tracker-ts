type ButtonProps = {
  children: React.ReactNode;
  mode: "dark" | "light";
};

function Button({ children, mode }: ButtonProps) {
  return (
    <button
      className={`${mode === "dark" ? "bg-neutral-900 text-white border-0" : "bg-white text-dark border-2 text-sm outline-none"}  rounded-lg flex gap-2 py-2 px-4 border-gray-200`}
    >
      {children}
    </button>
  );
}

export default Button;
