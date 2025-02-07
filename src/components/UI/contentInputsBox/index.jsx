/* eslint-disable react/prop-types */
import * as Section from "./styles.js";

export function SectionInputs({
  backgroundColor,
  label,
  click,
  children,
  icon,
  colorLabel,
  width,
  height,
  padding,
  large
}) {
  return (
    <Section.Container $width={width} $large={large} $height={height} onClick={click} $color={colorLabel} $padding={padding}>
      <Section.ContentLabelAndIcon>
        {icon}
        <Section.label $colorLabel={colorLabel}>{label}</Section.label>
      </Section.ContentLabelAndIcon>

      <Section.Content $backgroundColor={backgroundColor}>
        {children}
      </Section.Content>
    </Section.Container>
  );
}
