/* eslint-disable react/prop-types */
import * as C from "./styles";

export function Content({
  children,
  marginTop = "0",
  padding = "1rem 1rem 1rem 2rem",
  isTransparent = false,
}) {
  return (
    <C.Content
      style={isTransparent ? { backgroundColor: "transparent" } : {}}
      $marginTop={marginTop}
      $padding={padding}
    >
      {children}
    </C.Content>
  );
}
