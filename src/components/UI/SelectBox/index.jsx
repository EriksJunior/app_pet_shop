/* eslint-disable react/prop-types */
import { useSelectedValue } from "./hooks/useSelectedValue";

import * as S from "./styles";

export function SelectBox({
  isDisabled = false,
  items = [],
  dropDownColor,
  dropDownTextColor,
  textColorHover,
  textLabel,
  icon,
  selectItem,
  clickButton,
  textButton,
  colorButton,
  colorTextButton,
  enableButton = false,
  value = null,
  innerRef,
  colorLabel,
  placeholder,
  principalKey,
  textOption,
}) {
  const { valueSelected, handleChange, heightElement } = useSelectedValue(
    value,
    items,
    selectItem,
    principalKey,
    textOption
  );

  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  const disableWriting = (event) => {
    return event.preventDefault();
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <S.SelectBox
        type="text"
        $isDisabled={isDisabled}
        defaultValue={valueSelected}
        onKeyDown={disableWriting}
        placeholder={placeholder}
        ref={innerRef}
        onBlur={clearInputRequired}
      />

      <S.Label $colorLabel={colorLabel}>
        {textLabel}
        <S.RequiredField className="requiredField">
          Campo Obrigatório
        </S.RequiredField>
      </S.Label>

      <S.ArrowDown />

      <S.Container className="containerSelect" $dropDownColor={dropDownColor}>
        <S.Ul ref={heightElement}>
          <S.Li
            $dropDownTextColor={dropDownTextColor}
            $textColorHover={textColorHover}
            onClick={() =>
              handleChange({
                [principalKey]: "",
                [textOption]: "Selecione ...",
              })
            }
          >
            Selecione ...
          </S.Li>

          {items.map((item, i) => (
            <S.Li
              key={item[principalKey] || i}
              $dropDownTextColor={dropDownTextColor}
              $textColorHover={textColorHover}
              onClick={() => handleChange(item)}
            >
              {item[textOption] || `default ${i}`}
            </S.Li>
          ))}
        </S.Ul>

        {enableButton && (
          <S.ContentButtonCreate>
            <S.ButtonCreate
              $dropDownTextColor={dropDownTextColor}
              onClick={clickButton}
              $colorButton={colorButton}
              $colorTextButton={colorTextButton}
            >
              {icon}
              {textButton}
            </S.ButtonCreate>
          </S.ContentButtonCreate>
        )}
      </S.Container>
    </div>
  );
}
