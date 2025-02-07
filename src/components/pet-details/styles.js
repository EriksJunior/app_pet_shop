import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PetName = styled.h4`
  font-size: 1.3rem;
  font-weight: 500; 
  color: #717171;
  margin: ${props => props.$margin};
`

export const CloseIcon = styled.span`
  padding: 0.2rem;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const ContentClose = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: brown;
  cursor: pointer;
  border-radius: 50%;
  transition: ease-in all 0.2s;
  border: solid 2px transparent;

  p {
    margin: 0;
  }

  &:hover {
    box-shadow: 0 0 0 2px brown;

    ${CloseIcon} {
      background-color: brown;
      transition: ease-in all 0.2s;
    }
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`

export const TitleItem = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$color || 'black'};
  margin: 0;
`

export const SubtitleItem = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #a1a1a1;
  margin: 0;
`