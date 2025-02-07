import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ActionButton = styled(Button)`
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || ""};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${props => props.$backgroundColor};
  box-shadow: ${props => props.$boxShadow};
  border-radius: 5px!important;
  border: ${props => props.$border ? props.$border : "none"}!important;
  color: ${props => props.$color || "white"}!important;
  font-size: ${props => props.$fontSize || "12px"}!important;
  font-weight: 600;
  padding: 5px!important;
  cursor: pointer!important;
  &:hover {
    background-color: ${props => props.$hoverColor || props.$backgroundColor}!important;
  };
  &:active {
    background-color: ${props => props.$activeColor || props.$backgroundColor}!important;
  };
`