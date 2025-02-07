import styled from "styled-components";

export const Label = styled.label`
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap !important;
  text-overflow: ellipsis;
  color: ${props => props.$colorLabel || '#a1a1a1'};
  padding: 0 0.2em;
  font-weight: 500;

  @media screen and (min-width: 1980px){
    &{
      font-size: 11px;
      bottom: 18px;
    }
  }
`

export const Container = styled.div`
  opacity: 0;
  transition: ease-in 0.1s;
  visibility: hidden;
  position: absolute;
  background-color: ${(props) => props.$dropDownColor || "white"};
  top: 70px;
  width: 100%;
  z-index: 9999;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #8b87878f;
`

export const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 5px!important;
    height: 8px!important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: white!important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #44d2db!important;
    border-radius: 5px;
  }
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  color: ${(props) => props.$dropDownTextColor || "#a1a1a1"};
  font-weight: 500;
  font-size: 12px;
  min-height: 30px;
  width: 100%;
  padding: 0.5em 0.5em;
  cursor: pointer;
  transition: ease-in 0.1s all;
    
  &:hover {
    background-color: ${(props) => props.$textColorHover || "#44d2db"};
  }

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const ButtonCreate = styled.button`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 0px 1px 0px #565555b8;
  background-color: ${props => props.$colorButton || "white"};
  border-radius: 5px!important;
  border: none!important;
  color: ${props => props.$colorTextButton || "black"}!important;
  font-size: 12px!important;
  font-weight: 500;
  padding: 0.5rem 0.2rem;
  cursor: pointer!important;
  transition: ease-in 0.1s;
  box-shadow: 0px 0px 2px 0 #565555b8;


  &:hover {
    box-shadow: 0px 0px 4px 0 #565555b8;
  }
`

export const ContentButtonCreate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.8rem 0.5rem;
`

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 15px;
  right: 8px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #47d2a9;
`;

export const RequiredField = styled.span`
  display: none;
  width: auto;
  position: absolute;
  background-color: red;
  z-index: 200;
  left: 0;
  top: -0.2rem;
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  color: white;
  font-size: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 20%;
    bottom: -0.3rem;
    transform: translateX(-50%);
    border-width: 0.4rem 0.4rem 0;
    border-style: solid;
    border-color: red transparent transparent;
    display: block;
    width: 0;
  }
`

export const SelectBoxInfinite = styled.input`
  &:focus ~ .containerSelect {
    opacity: 1;
    visibility: visible;
  }

  font-size: 14px;
  height: 40px;
  width: 100%;
  border: 1px solid #d5d3d3;
  outline: none;
  padding-left: 5px;
  padding-right: 22px;
  color: #5f5c5b;
  background-color: white; /*#e9e9e9*/
  border-radius: 5px!important;

  &:required {
    border: 1px solid red!important;
    box-shadow: 0 0 2px 1px #00000052!important;
  }

  &:required ~ ${Label} {
    color: transparent!important;
    user-select: none!important;

    .requiredField {
      display: block!important;
    }
  }

  &:not(:focus) {
    transition: ease-in 0.1s all;
  }

  &:focus {
    transition: ease-in 0.1s all;
  }

  @media screen and (min-width: 1980px){
    & {
      font-size: 15px;
    }
  }

  ${(props) => props.$isDisabled && `
    background-color: #e9e9e9;
    pointer-events: none;
    color: #949290!important;
    user-select: none;
  `}
`;