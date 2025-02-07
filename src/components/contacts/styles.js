import styled from "styled-components";
import { ImPlus } from "react-icons/im";
import { BsXCircleFill } from "react-icons/bs";

export const ContainerGeneral = styled.div`
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px){
    margin-bottom: 0.5rem;
  } 
`

export const AddMoreContacts = styled.div`
  position: absolute;
  right: 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    .addMoreHover {
      color: #09b4bd;
    }
  }

  @media screen and (max-width: 1200px){
    top: 1rem;
  } 

  @media screen and (min-width: 1201px){
    bottom: 1rem;
  } 
`

export const ContentCard = styled.section`
  width: 100%;
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 1201px){
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 1201px){
    gap: 0;
    flex-direction: column;
  }

  @media screen and (min-width: 854px){
    width: 100%;
  }
`

export const ContentItems = styled.div`
  position: relative;
  width: 100%!important;
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 1200px){
    width: 31.2%!important;
    flex-direction: column;
    gap: 0rem!important;
    /* box-shadow: 0px 0px 4px 0px #00000059; */
    padding: 1.5rem 1rem;
    border-radius: 5px;
    margin-top: 1.5rem;
    
    .fistItem {
      margin-top: 0!important;
    }
  }


   @media screen  and (min-width: 654px) and (max-width: 1004px){
    width: 47%!important;
  }

  @media screen  and (max-width: 653px){
    width: 100%!important;
  }
`

export const Item = styled.div`
  margin-top: 1.5rem;

  @media screen and (min-width: 1200px){
    margin-top: 0;
  }

  @media screen and (max-width: 1200px){
    width: 100%!important;
  } 
  
`

export const ContentIconDelete = styled.div`
 @media screen and (min-width: 1201px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  } 

  @media screen and (max-width: 1200px){
    position: absolute;
    top: -0.8rem;
    right: -0.5rem;
  } 
`

export const IconDelete = styled(BsXCircleFill)`
  width: 18px;
  height: 18px;

  @media screen and (max-width: 1200px){
    width: 25px;
    height: 25px;
  }
`

export const IconPlus = styled(ImPlus)`
  color: #0ad4e0;
  transition: ease-in .1s all;

`

export const Span = styled.span`
  font-size: 11px;
  color: #0ad4e0;
  text-decoration: underline;
  font-weight: 600;
  transition: ease-in .1s all;
`