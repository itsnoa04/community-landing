import { colorMap } from "../../templateConfig";

interface ButtonProps {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  className = "",
  style = {},
}: ButtonProps) => {
  return (
    <>
      <style>{`
        button {
            background-color: ${colorMap["500"]};
            color: white;
        }

        button:hover {
            background-color: ${colorMap["300"]};
            color: white;
        }
      `}</style>
      <button
        onClick={onClick}
        className={`text-white font-bold py-2 px-4 rounded  ${className} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={style}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
