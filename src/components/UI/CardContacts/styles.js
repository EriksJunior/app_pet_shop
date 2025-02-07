import styled from "styled-components"

export const DisplayContacts = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContentImgAndContacts = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1rem;
`

export const ContentImg = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const ContentDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    margin: 0;
  }

  p:first-child {
    font-size: 1rem;
    font-weight: 600;
    transition: ease-in all 0.1s;
  }

  p:nth-of-type(2) {
    font-size: 1;
    color: #a1a1a1;
  }
`

export const ContentInfo = styled.div`
  width: 45px;
  height: 35px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #77a1bf;
  box-shadow: 0 3px 4px 0 #00000045;
  transition: ease-in all 0.1s;

  .iconInfo {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
`

export const ContentContacts = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: ease-in all 0.1s;
  /* background-color: #4d4d4d; */
  background: linear-gradient(90deg, #dedede 50%, #ffff 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.5s;
  box-shadow: 0 3px 4px 0 #00000045;
  overflow: hidden;
  position: relative;

  &:hover {
    background-position: 0 0;

    ${ContentInfo} {
      background-color: #77a1bf;
      height: 100%;
      opacity: 1;
    }
  }
`