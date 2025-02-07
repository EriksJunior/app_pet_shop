/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { HiPlus } from "react-icons/hi";
import * as Off from "./styles";

export function OffCanvas({
  title = "Default Title",
  expanded = false,
  onClose,
  backgroundColor,
  width,
  children,
  colorCloseIcon,
  backgroundCloseIconColor,
  sizeCloseText,
  colorCloseText,
  colorTitle,
  fontSizeTitle,
  clearValues,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const closeIfClickEmpty = (event) => {
    if (event.target.closest(".offCanvas")) {
      return;
    }

    handleClose();
  };

  useEffect(() => {
    setIsExpanded(expanded);

    if (expanded && clearValues) clearValues();
  }, [expanded]);

  return (
    <Off.Container $isOpen={isExpanded} onMouseDown={closeIfClickEmpty}>
      <Off.Content
        $isOpen={isExpanded}
        $backgroundColor={backgroundColor}
        $width={width}
        className="offCanvas"
      >
        <Off.ContainerTitleAndIcon>
          <Off.Title $colorTitle={colorTitle} $fontSizeTitle={fontSizeTitle}>
            {title}
          </Off.Title>

          <Off.Label
            onClick={handleClose}
            $sizeCloseText={sizeCloseText}
            $colorCloseText={colorCloseText}
          >
            <span>fechar</span>

            <Off.CloseIcon $backgroundCloseIconColor={backgroundCloseIconColor}>
              <HiPlus
                size={18}
                color={colorCloseIcon || "white"}
                style={{ transform: "rotate(45deg)" }}
              />
            </Off.CloseIcon>
          </Off.Label>
        </Off.ContainerTitleAndIcon>

        {children}
      </Off.Content>
    </Off.Container>
  );
}
