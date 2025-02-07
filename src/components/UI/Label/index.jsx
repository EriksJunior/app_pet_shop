/* eslint-disable react/prop-types */
import { Label } from "./styles";

export function CustomLabel({ colorLabel, fontSize, text }) {
  return (
    <Label $colorLabel={colorLabel} $fontSize={fontSize}>{text ? text : "Default Label"}</Label>
  );
}
