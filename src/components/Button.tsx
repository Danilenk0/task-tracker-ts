type ButtonProps = {
  children: React.ReactNode;
  mode: "dark" | "light" | "delete";
  type: "submit" | "reset" | "button" | undefined;
  action: () => void;
};

const styles = {
  dark: "bg-neutral-900 text-white border-0",
  light: "bg-white text-dark border-2 ",
  delete: "text-red-400 border-2 border-gray-200",
};

function Button({ children, mode, type, action }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={action}
      className={`${styles[mode]} rounded-lg flex items-center gap-2 py-2 px-4 border-gray-200 text-sm`}
    >
      {children}
    </button>
  );
}

export default Button;
