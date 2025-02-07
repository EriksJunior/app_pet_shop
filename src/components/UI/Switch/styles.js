import styled from "styled-components";
import { InputGroup } from "react-bootstrap";


export const Label = styled.label`
  font-size: 11px;
  color: ${props => props.$colorLabel || '#0ad4e0'};
  background-color: ${props => props.$colorBackgroundLabel};
  font-weight: bold;
  text-decoration: underline;
`

export const InputGroupCustom = styled(InputGroup)`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Content = styled.div`
  height: 25px;
  position: relative;
  display: inline-block;
  

  .switch input:checked + .slider {
    background-color: ${props => props.$backgroundColor || "#d9d9d9"};
    color: white;
  }

  .slider {
    background-color: ${props => props.$backgroundColor || "#d9d9d9"};
  }

  .switch input:checked + .slider::before {
    content: "${(props) => props.$textChecked || "Yes"}";
    background-color: ${props => props.$colorChecked || "white"};
    color: ${props => props.$colorTextChecked || "#0ad4e0"};
    transform: translateX(100%);
  }

  .slider::before {
    background-color: ${props => props.$colorUnChecked || "#dddddd"};;
    position: absolute;
    color: ${props => props.$colorTextUnChecked ||  "#666666"};
    content: "${props => props.$textUnChecked || "No"}";
    font-size: 10px;
    height: 74%;
    width: 44%;
    left: 6%;
    border-radius: 50px;
    display: grid;
    align-content: center;
    justify-content: center;
    transition: 0.2s;
    font-size: 8px;
  }

  .switch input {
    display: none;
  }
`

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  color: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  width: 50px !important;
  height: 100%;
  font-size: 8px;
  font-weight: 600;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
  }
`

export const SwitchLabel = styled.label`

`

export const Input = styled.input`
`