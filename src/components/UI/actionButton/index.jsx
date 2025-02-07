/* eslint-disable react/prop-types */
import * as C from "./styles.js";

export function ActionButton({
  backgroundColor,
  width,
  height,
  hoverColor,
  activeColor,
  click,
  border,
  color,
  text,
  icon,
  boxShadow,
  fontSize,
  className
}) {
  return (
    <C.ActionButton
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      $hoverColor={hoverColor}
      $activeColor={activeColor}
      $border={border}
      $color={color}
      $boxShadow={boxShadow}
      $fontSize={fontSize}
      onClick={click}
      className={className}
    >
      {icon}
      {text}
    </C.ActionButton>
  );
}
