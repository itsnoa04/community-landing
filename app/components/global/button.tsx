import { useId } from "react";
import { colorMap } from "../../templateConfig";

interface ButtonProps {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  textColor?: string;
  hoverColor?: string;
}

const Button = ({
  children,
  color = colorMap["500"],
  hoverColor = colorMap["300"],
  textColor = "white",
  onClick = () => {},
  disabled = false,
  className = "",
  style = {},
}: ButtonProps) => {
  const id = useId();
  return (
    <>
      <style jsx>{`
        button {
          background-color: ${color};
          color: ${textColor};
        }

        button:hover {
          background-color: ${hoverColor};
          color: white;
        }
      `}</style>
      <button
        onClick={onClick}
        className={`text-white font-bold py-2 px-4 rounded  ${className} ${id} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={style}
        id={`${id}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
