import "../styles/button.css";

const Button = ({
  onClick,
  text,
  disabled = false,  // تصحيح الكتابة إلى disabled بدلاً من disablad
  style,
  className = "",
  type = "button",
  variant,  // التأكد من تمرير variant لتخصيص الزر
}) => {
  // إضافة الصنف بناءً على variant
  const buttonClass = `btn ${variant ? variant : ""}`;

  return (
    <button
      className={`${className} ${buttonClass}`} // دمج الصنف المتغير مع className الموجود
      onClick={onClick}
      style={style}
      type={type}
      disabled={disabled} // إضافة خاصية disabled بشكل صحيح
    >
      {text}
    </button>
  );
};

export default Button;
