/* eslint-disable react/prop-types */
import * as C from "./styles";

export function Col({ children, width = "100%" }) {
  return <C.Col $width={width}>{children}</C.Col>;
}
