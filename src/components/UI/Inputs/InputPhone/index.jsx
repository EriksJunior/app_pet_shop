/* eslint-disable react/prop-types */
import * as I from "../styles";

export function InputPhone({
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
  isCellPhone = false,
}) {
  const format = (value) => {
    if (value) {
      let newValue = value.replace(/\D/g, "");

      if (isCellPhone) {
        newValue = newValue.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else {
        newValue = newValue.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
      }

      return newValue;
    }

    return "";
  };

  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  return (
    <I.CustomInputGroup style={{flexDirection: "column-reverse"}}>
      <I.InputText
        type={typeInput}
        $isDisabled={isDisabled}
        $colorLabel={colorLabel}
        value={format(value)}
        onInput={(e) => {handleChange(e), clearInputRequired()}}
        name={name}
        maxLength={isCellPhone ? 15 : 14}
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
