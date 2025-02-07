/* eslint-disable react/prop-types */
import { Footer, FooterContent } from "./style";
export function FooterActions({ children }) {
  return (
    <Footer>
      <FooterContent>{children}</FooterContent>
    </Footer>
  );
}
