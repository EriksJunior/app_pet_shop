/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { HiPlus } from "react-icons/hi";

import * as Box from "./styles";

export function BigBox({
  open,
  close,
  children,
  titleHeader = "Sem informações",
  colorTitle,
}) {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { theme } = useContext(ThemeContext);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current.scrollTop > 50) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      contentRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box.Container $isOpen={open}>
      <Box.Header>
        <Box.HeaderContent $isOpen={open} onClick={close}>
          <HiPlus color="whitesmoke" style={{ transform: "rotate(45deg)" }} />
        </Box.HeaderContent>
      </Box.Header>

      <Box.MainContent ref={contentRef}>
        <Box.FakeHeightTitle $isHeaderFixed={isHeaderFixed} />
        <Box.ContentTitleHeader $isHeaderFixed={isHeaderFixed} $theme={theme}>
          <Box.TitleHeader
            $colorTitle={colorTitle}
            $isHeaderFixed={isHeaderFixed}
          >
            {titleHeader}
          </Box.TitleHeader>
        </Box.ContentTitleHeader>

        {children}
      </Box.MainContent>
    </Box.Container>
  );
}
