/* eslint-disable react/prop-types */
import * as S from "./styles";

export function Switch({
  displayLabel = false,
  textLabel,
  textChecked = "Yes",
  textUnChecked = "No",
  backgroundColor,
  handleChange,
  name,
  isChecked
}) {
  return (
    <S.InputGroupCustom>
      {displayLabel && <S.Label>{textLabel} </S.Label>}

      <S.Content
        $textChecked={textChecked}
        $textUnChecked={textUnChecked}
        $backgroundColor={backgroundColor}
      >
        <S.SwitchLabel className="switch col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <S.Input type="checkbox" checked={isChecked} name={name} onChange={(e) => handleChange(e)}/>
          <S.Slider className="slider">
            <span>{textUnChecked}</span>
            <span>{textChecked}</span>
          </S.Slider>
        </S.SwitchLabel>
      </S.Content>
    </S.InputGroupCustom>
  );
}
