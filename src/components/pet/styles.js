import { FaUsers } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";

import styled from "styled-components";

export const UsersIcon = styled(FaUsers)`

`

export const RemoveIcon = styled(AiOutlineCloseCircle)`
  
`


export const PawIcons = styled(MdOutlinePets)`
  
`

export const ContainerCardsPet = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .contentHeaderCards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 8px 2px;

    p {
      margin: 0!important;
      font-size: 14px;
      font-weight: bold;
      color: #717171;
    }
  }

  .titleAndIcon {
    display: flex;
    gap: 1rem;
  }

  .noPetsFoundTitle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a1a1a1ab;
    font-size: 2.2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

export const ContentCardsPet = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

export const HeaderCardPet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  
  .namePet {
    font-weight: 600;
    font-size: 18px;
    max-width: 218px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-bottom: 5px;
  }
`

export const CardPet = styled.div`
  position: relative;
  width: 250px;
  height: 225px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: ease-in all 0.1s;

  .contentNotImageSelect {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 1rem;
    border-radius: 8px;
    transition: ease-in all 0.1s;
  }

  .contentIconNotImage {
    width: 100px;
    height: 100px;
    background-color: aliceblue;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 #00000047;
  }

  .removePet {
    width: 26px;
    height: 26px;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 #0000008a;
    transition: ease-in all 0.1s;
  }

  p {
    margin: 0;
    font-weight: 500;
  }

  @media screen and (max-width: 1366px) {
    width: 225px;
    height: 210px;

    .iconNotImage, .imgPet, .contentIconNotImage{
      width: 80px;
      height: 80px;
    }
  }
`

export const ContainerPet = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 770px){
    flex-direction: column;
    gap: 0;
  }
`