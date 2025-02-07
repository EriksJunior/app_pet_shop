/* eslint-disable react/prop-types */
import { UseInfiniteScroll } from "./hooks/useInfiniteScroll";
import { UseDebounce } from "../../../utils/useDebounce";

import * as S from "./styles";

export function SelectBoxInfiniteScroll({
  isDisabled = false,
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
  blockedWriting = false,
  actionWhenWriting,
  innerRef,
  colorLabel,
  loadingNewItems,
  placeholder,
  principalKey,
  textOption,
}) {
  const {
    valueSelected,
    setValueSelected,
    inputValue,
    handleChange,
    heightElement,
    items,
    loadingItemsOnFocus,
    loadingItemsWithDebounce,
    handleActionWhenWriting
  } = UseInfiniteScroll(selectItem, actionWhenWriting, loadingNewItems, principalKey, textOption);

  const debouncedChanged = UseDebounce(loadingItemsWithDebounce);

  const moreItemsByWriting = async (e) => {
    debouncedChanged(e.target.value, "nome", 1);
    setValueSelected(e.target.value);
    inputValue.current = e.target.value;
  };

  const disableWriting = (event) => {
    if (blockedWriting) {
      return event.preventDefault();
    }
  };

  const clearInputRequired = () => {
    if (innerRef) innerRef.current.required = false;
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <S.SelectBoxInfinite
        type="text"
        $isDisabled={isDisabled}
        value={valueSelected || ""}
        onKeyDown={(e) => {
          disableWriting(e), handleActionWhenWriting(), clearInputRequired();
        }}
        onChange={(e) => {
          moreItemsByWriting(e), clearInputRequired();
        }}
        onFocus={loadingItemsOnFocus}
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
          {items.map((item, i) => (
            <S.Li
              key={item[principalKey] || i}
              $dropDownTextColor={dropDownTextColor}
              $textColorHover={textColorHover}
              onClick={() => handleChange(item)}
            >
              {item[textOption] || `Default ${i}`}
            </S.Li>
          ))}
        </S.Ul>

        {enableButton && items.length ? (
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
        ) : (
          ""
        )}
      </S.Container>
    </div>
  );
}
