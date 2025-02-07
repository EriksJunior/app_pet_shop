/* eslint-disable react/prop-types */
import * as C from "./styles";

export function Row({ children, flexBasic, nowrap = false }) {
  return <C.Row $flexBasic={flexBasic} $nowrap={nowrap}>{children}</C.Row>;
}
