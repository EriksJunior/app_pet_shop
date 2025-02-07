import styled from "styled-components";
import { Button } from "react-bootstrap";

export const RegisterButton = styled(Button)`
  width: ${props => props.$width || "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  height: 35px;
  border-radius: 8px;
  font-size: 13px;
  box-shadow: 0 2px 2px 0 #0000004a;
  cursor: pointer;
  background-color: ${props => props.$backgroundColor || "#66a3b7"}!important;

  &:hover {
    background-color: ${props => props.$hoverColor || "#5896ab"}!important
  };

  &:active {
    background-color: ${props => props.$activeColor || "#5896ab"}!important
  };
`