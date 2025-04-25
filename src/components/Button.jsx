import"../styles/button.css";
import { PiUserListBold } from "react-icons/pi";


const Button = ({onClick, onFetch, backgroundColor, text, children, style}) => {
    // props (text , color background, onclick, children (to icon support ))
    return(
        <button className="button" onClick={onClick} style={style}>
        {children ? children : text}
      </button>// if dont argument children , you can argment text
    
    )

}
export default Button;