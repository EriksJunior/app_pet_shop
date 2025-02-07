/* eslint-disable react/prop-types */
import { Checked, Label, FalseInputChecked, DefaultIconChecked } from "./styles";
import { InputGroup } from "react-bootstrap";

export function InputChecked({
  isDisabled = false,
  labelFixed = false,
  textLabel,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef,
  colorLabel,
  checked = false,
}) {
  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  return (
    <InputGroup style={{height: "58px"}}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
        <Label
          htmlFor="default"
          $labelFixed={labelFixed}
          $colorBackgroundLabel={colorBackgroundLabel}
          $colorLabel={colorLabel}
        >
          {textLabel}
        </Label>

        <Checked
          id={"default"}
          type="checkbox"
          $isDisabled={isDisabled}
          checked={checked}
          onChange={(e) => handleChange(e)}
          name={name}
          ref={innerRef}
          onBlur={clearInputRequired}
        />

        <FalseInputChecked htmlFor="default">
          <DefaultIconChecked color="white"/>
        </FalseInputChecked>
      </div>
    </InputGroup>
  );
}
