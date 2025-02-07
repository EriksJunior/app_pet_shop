import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.$width ? props.$width : "100%"};
  height: ${props => props.$height ? props.$height : "auto"};
  padding: ${props => props.$padding ? props.$padding : "16px"};
  display: flex;
  flex-direction: column;
  min-width: ${props => props.$width ? props.$width : ""};

  @media screen and (max-width: 600px){
    width: ${props => props.$large && "100%"};
  }
`

export const Content = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  height: 100%;
`

export const ContentLabelAndIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  padding: 8px 16px;
`

export const label = styled.label`
  color: ${props => props.$colorLabel || '#717171'};
  font-weight: bold;
  font-size: 14px
`
