/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import * as S from "./styles";
import { PiGearFill } from "react-icons/pi";
import { defaultActions } from "./common";

export function DropDown({
  items = defaultActions,
  dropDownColor,
  dropDownTextColor,
  textColorHover,
  htmlFor = "action",
  value,
}) {
  const containerRef = useRef(null);
  const refDrop = useRef(null);

  const openDropdown = () => (refDrop.current.checked = true);
  const closeDropdown = () => (refDrop.current.checked = false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        refDrop.current.checked = false;
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <S.Label htmlFor={htmlFor}>
        <PiGearFill size={18} style={{ cursor: "pointer" }} color="gray" />
      </S.Label>

      <S.Input
        className="dropDown"
        required
        type="checkbox"
        id={htmlFor}
        ref={refDrop}
        onChange={openDropdown}
      />

      <S.Container className="containerSelect" $dropDownColor={dropDownColor}>
        <S.Ul>
          {items.map((item, i) => (
            <S.Li
              key={i}
              $dropDownTextColor={dropDownTextColor}
              $textColorHover={textColorHover}
              onClick={() => {
                item.action(value);
                closeDropdown();
              }}
            >
              {item.text}
            </S.Li>
          ))}
        </S.Ul>
      </S.Container>
    </div>
  );
}
