/* eslint-disable react/prop-types */
import * as C from "./styles";

export function Card({
  children,
  flexBasic = "250px",
  between,
  pointer,
  click,
  notHoverShadow = false,
  theme
}) {

  return (
    <C.Container
      $flexBasic={flexBasic}
      $between={between}
      $pointer={pointer}
      $notHoverShadow={notHoverShadow}
      $theme={theme}
      onClick={click}
    >
      {children}
    </C.Container>
  );
}
