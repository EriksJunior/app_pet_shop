import styled from "styled-components";

export const Container = styled.div`
  position: fixed!important;
  top: 0;
  height: 100%;
  z-index: 9999;
  transition: ease-in all 0.2s;


  ${(props) => props.$isOpen ?
    `
        width: 100%;
        visibility: visible;
        background-color: #0000002e;
      `
    :
    `
        visibility: hidden;
        transition: ease-in all 0.2s; 
      `
  } 
`

export const Content = styled.div`
  width: ${props => props.$width || '600px'};
  height: 100%;
  background-color: ${props => props.$backgroundColor || '#0ad4e0'};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  box-shadow: -2px 0 4px 0 #00000042;
  transition: ease-in all 0.2s;
  padding: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px!important;
    height: 8px!important;
  }

  &::-webkit-scrollbar-track {
    background: white!important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #44d2db!important;
  }

  ${(props) => props.$isOpen ?
    `
      visibility: visible;
    `
    :
    `
      visibility: hidden;
      transform: translateX(600px);
    `
  } 

  @media screen and (max-width: 750px){
    width: 100%
  }
`

export const ContainerTitleAndIcon = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CloseIcon = styled.span`
  padding: 0.2rem;
  background-color: ${props => props.$backgroundCloseIconColor || "#3d3a3a"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  font-size: ${props => props.$sizeCloseText || "14px"};
  font-weight: 500;
  color: ${props => props.$colorCloseText || "#a1a1a1"};
  cursor: pointer;
  border-radius: 50px;
  padding-left: 0.5rem;
  padding-right: 0.10rem;
  transition: ease-in all 0.2s;
  border: solid 2px transparent;
`

export const Title = styled.span`
  font-size: ${props => props.$fontSizeTitle || "20px"};
  font-weight: 600;
  color: ${props => props.$colorTitle || "#fafafa"};
`