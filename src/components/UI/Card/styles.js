import styled from "styled-components";
import { E_THEME } from "../../../utils/enums/theme";

export const Container = styled.div`
  width: 100%;
  flex: 1 1 ${props => props.$flexBasic || '250px'};
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$between && "space-between"};
  gap: 2rem;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 4px 0 #00000017;
  cursor: ${props => props.$pointer && "pointer"};
  transition: ease-in all 0.1s;

  &:hover {
    ${(props) => props.$notHoverShadow && props.$theme === E_THEME.lightMode ?
      `
        box-shadow: 0 2px 4px 0 #00000017!important;
        background-color: white!important
      `
      :
        props.$notHoverShadow && props.$theme === E_THEME.darkMode &&
      `
        box-shadow: 0 2px 4px 0 #00000017!important;
        background-color: #181818!important;
      `
    } 
  }
`