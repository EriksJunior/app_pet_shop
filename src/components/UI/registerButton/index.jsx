/* eslint-disable react/prop-types */
import * as C from "./styles.js";

export function RegisterButton({
  backgroundColor,
  width,
  hoverColor,
  activeColor,
  click,
  icon,
  text,
}) {
  return (
    <C.RegisterButton
      $backgroundColor={backgroundColor}
      $width={width}
      $hoverColor={hoverColor}
      $activeColor={activeColor}
      onClick={click}
    >
      {icon}
      {text}
    </C.RegisterButton>
  );
}
