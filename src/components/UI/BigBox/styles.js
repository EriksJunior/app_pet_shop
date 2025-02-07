import styled from "styled-components";
import { E_THEME } from "../../../utils/enums/theme";

export const Container = styled.div`
  visibility:  ${(props) => props.$isOpen ? "visible" : "hidden"};
  position: fixed;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: whitesmoke;
  bottom: ${(props) => props.$isOpen ? "0" : "-100%"};
  left: 0;
  z-index: 8000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ease-in 0.4s;
`
export const Header = styled.div`
  position: relative;
`

export const HeaderContent = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: ${(props) => props.$isOpen ? "0.5rem" : "100%"};
  right: 2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #ba0909b8;
  cursor: pointer;
  transition: ease-in 0.4s;
  z-index: 9999;
`

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
`

export const ContentTitleHeader = styled.div`
  ${(props) => props.$isHeaderFixed ?
    `
      width: 100%; 
      height: 50px;
      position: fixed; 
      top: -1px; 
      z-index: 100; 
      padding: 0 16px;
      background-color: white;
      box-shadow: 0 1px 4px 0 #00000026;
      transition: all 0.1s ease-in 0s;
    `
    :
    `
      margin: 20px 16px 10px 16px;
      border-bottom: 1px solid rgb(201 200 199);
    `
  }

  ${(props) => props.$theme === E_THEME.darkMode && props.$isHeaderFixed &&
    `
      background-color: #313131;
    `
  }
  
`

export const TitleHeader = styled.h5`
  color: ${props => props.$colorTitle || '#717171'};
  font-weight: 600;

  ${(props) => props.$isHeaderFixed ?
    ` 
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
    `
    :
    `
      padding-left: 16px;
    `
  }
 
`

export const FakeHeightTitle = styled.div`
  height: ${props => props.$isHeaderFixed ? '50px' : 'auto'};
`