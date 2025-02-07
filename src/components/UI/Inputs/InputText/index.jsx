/* eslint-disable react/prop-types */
import * as I from "../styles";

export function InputLabel({
  typeInput = "text",
  isDisabled = false,
  labelFixed = false,
  textLabel,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  maxLength,
  innerRef,
  colorLabel,
}) {
  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  return (
    <I.CustomInputGroup>
      <I.InputText
        type={typeInput}
        $isDisabled={isDisabled}
        value={value || ""}
        onInput={(e) => {
          handleChange && handleChange(e), clearInputRequired();
        }}
        name={name}
        maxLength={maxLength}
        ref={innerRef}
        onBlur={clearInputRequired}
      />

      <I.Label
        $labelFixed={labelFixed}
        $colorBackgroundLabel={colorBackgroundLabel}
        $colorLabel={colorLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField">
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>
    </I.CustomInputGroup>
  );
}
