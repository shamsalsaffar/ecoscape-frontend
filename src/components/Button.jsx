import "../styles/button.css";
import { PiUserListBold } from "react-icons/pi";

const Button = ({
  onClick,
  text,
  style,
  className = "",
  type = "button",
}) => {
  return (
    <button className={className} onClick={onClick} style={style} type={type}>
      {text}
    </button>
  );
};

export default Button;
