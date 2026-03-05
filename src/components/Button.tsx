type ButtonProps = {
  children: React.ReactNode;
  mode: "dark" | "light" | "delete";
};

const styles = {
  dark: "bg-neutral-900 text-white border-0",
  light: "bg-white text-dark border-2 ",
  delete: "text-red-400 border-2 border-gray-200",
};

function Button({ children, mode }: ButtonProps) {
  return (
    <button
      className={`${styles[mode]} rounded-lg flex items-center gap-2 py-2 px-4 border-gray-200 text-sm`}
    >
      {children}
    </button>
  );
}

export default Button;
