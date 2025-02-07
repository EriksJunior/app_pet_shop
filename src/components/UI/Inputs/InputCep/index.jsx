/* eslint-disable react/prop-types */
import * as I from "../styles";

export function InputCep({
  typeInput = "text",
  isDisabled = false,
  labelFixed = false,
  textLabel,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef,
  colorLabel,
}) {
  const format = (value) => {
    if (value) {
      let newValue = value.replace(/\D/g, "");

      if (newValue.length === 8)
        newValue = newValue.replace(/^(\d{5})(\d{0,3})/, "$1-$2");

      return newValue;
    }

    return "";
  };

  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  return (
    <I.CustomInputGroup>
      <I.InputText
        type={typeInput}
        $isDisabled={isDisabled}
        $colorLabel={colorLabel}
        value={format(value)}
        onInput={(e) => {
          handleChange(e), clearInputRequired();
        }}
        name={name}
        maxLength={8}
        ref={innerRef}
        onBlur={clearInputRequired}
      />

      <I.Label
        $labelFixed={labelFixed}
        $colorBackgroundLabel={colorBackgroundLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField">
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>
    </I.CustomInputGroup>
  );
}
