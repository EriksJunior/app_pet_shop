import styled from "styled-components";
import { BiSolidLock, BiSolidLockOpen } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { E_THEME } from "../../utils/enums/theme";

export const IconLock = styled(BiSolidLock)`
  size: 18;
  color: white;
  display: none;

  @media screen and (min-width: 1021px) {
    display: block;
  }
`

export const IconLockOpen = styled(BiSolidLockOpen)`
  color: white;
  display: none;

  @media screen and (min-width: 1021px) {
    display: block;
  }
`

export const IconMenuMobal = styled(AiOutlineMenu)`
  color: white;
  display: none;

  @media screen and (max-width: 1020px) {
    display: block;
  }
`

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  user-select: none;
`

export const ContainerSelectTheme = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: ease-in all 0.2s;
`

export const ContentSelectTheme = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 75px;
  border-radius: 50%;
  background-color: ${props => props.$theme === E_THEME.lightMode ? 'black' : 'white'};
  box-shadow: ${props => props.$theme === E_THEME.lightMode ? '0 2px 3px 0 #717171' : '0 2px 3px 0 #00000063'};
  cursor: pointer;
  z-index: 200;
`

export const ContentIconLock = styled.div` 
  position: absolute;
  top: 0.6rem;
  right: -30px;
  width: 25px;
  height: 25px;
  background-color: #47d2a9;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 #00000078;
  user-select: none;
  cursor: pointer;
  z-index: 100;
  transition: ease-in all 0.2s;

  @media screen and (max-width: 1020px){
    position: relative;
    min-width: 30px!important;
    height: 30px;
    top: 0.3rem;
    right: -40px;
    transition: ease-in all 0.2s;
    background-color: #66a3b7;

    ${(props) => props.$isExpanded ?
    `
        transform: translate(-25px, 0);
      `
    :
    `
        transform: translate(-5px, 0);
      `
  }
  } 
`

export const ContainerSidebar = styled.div`
  display: flex;
  gap: 1rem;
  /* height: 100vh; */
`

export const ContentSidebar = styled.div`
  position: relative;
  height: 100%;

  @media screen and (max-width: 1020px){
    display: flex;
    position: absolute;
    padding: 0;
    z-index: 200;
    transition: ease-in all 0.2s;

    ${(props) => props.$isExpanded ?
    `
        width: 100%;
        background-color: #0000002e;
      `
    :
    `
        left: -110px;
        transition: ease-in; 
      `
  } 
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: overlay;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 3px!important;
    height: 8px!important;
  }

  &::-webkit-scrollbar-track {
    background: #66a3b7!important;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white!important;
    border-radius: 10px;
  }
`

export const Li = styled.li`
  cursor: pointer;
  user-select: none;
`

export const ContentNavItems = styled.label`
  display: flex;
  width: auto;
  height: 43px;
  padding: 0.8rem 1rem 0.8rem 1.8rem;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`

export const IconAndTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const ContentNavItemsNotification = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: auto;
  height: 43px;
  padding: 0.8rem 1rem 0.8rem 1.8rem;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`

export const NavItem = styled.div`
  margin-top: 1px;
  opacity: 1;
`

export const InputRadio = styled.input`
  display: none;
  
  &:checked ~ ${ContentNavItems} {
    background-color: ${props => props.$theme === E_THEME.lightMode ? 'white' : '#47d2a9'};
    color: ${props => props.$theme === E_THEME.lightMode ? '#66a3b7' : 'white'};
    transition: ease-in all 0.2s;
  }

  &:checked ~ ${ContentNavItemsNotification} {
    background-color: ${props => props.$theme === E_THEME.lightMode ? 'white' : '#47d2a9'};
    color: ${props => props.$theme === E_THEME.lightMode ? '#66a3b7' : 'white'};
    transition: ease-in all 0.2s;
  }
`

export const NavFooter = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 2px 0 #00000063;
  overflow-y: hidden;
  overflow-x: hidden;
  user-select: none;

  @media screen and (max-height: 710px){
    box-shadow: 0 0 1px 0 #000000a8;
  }

  @media screen and (max-width: 1020px){
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const ContainerProfile = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const ImgProfile = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: solid 2px #00d5ad;
  object-fit: contain;
`

export const Logo = styled.img`
  width: 65px;
  height: 55px;
  object-fit: contain;
  cursor: pointer;
  transition: ease all 0.3s;
  margin-top: 0.3rem;
`

export const TitleProfile = styled.p`
  margin: 0;
  color: gray;
  font-weight: 600;
`

export const UserName = styled.p`
  margin: 0;
  color: #00d5ad;
  font-weight: 500;
  white-space: nowrap;
`

export const ContentNavAndFooter = styled.div`
  height: calc(100% - 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NumberOfNotifications = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 54px;
  width: 54px;
  height: 20px;
  border-radius: 11px;
  color: white;
  background-color: brown;

  ${(props) => !props.$isExpanded &&
    `
      position: absolute;
      top: -6px;
      right: -6px;
      width: auto;
      height: 20px;
      padding: 0.3rem;
    `
  }
`

export const Sidebar = styled.div`
  /* position: fixed; */
  /* z-index: 9999; */
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.$theme === E_THEME.lightMode ? '#66a3b7' : '#181818'};
  border-radius: 0;
  box-shadow: 0 0 2px 0 #00000063;
  transition: ease all 0.3s;
  /* overflow-y: hidden;
  overflow-x: hidden; */

  .menuProfile {
    display: none;
  }

  ${(props) => props.$isExpanded ?
    `
      width: calc(250px - 1rem);
      transition: ease all 0.3s;

      ${TitleProfile} {
        font-size: 12px;
        opacity: 1;
        transition: ease all 0.3s;
      }

      ${UserName} {
        font-size: 14px;
        opacity: 1;
        transition: ease all 0.3s;
      }

      ${NavItem} {
        display: block;
        font-size: 12px;
      }

      ${Logo} {
        width: 90px;
        transition: ease all 0.3s;
      }

      ${ContainerSelectTheme} {
        justify-content: flex-end;
        right: 10px;
        transition: ease-in all 0.2s;
      }

      ${ContentSelectTheme} {
        width: 35px;
        height: 35px;
        right: 10px;
      }

      ${ContainerSelectTheme} {
        bottom: 85px
      }

      .menuProfile {
        display: block;
      }
    `
    :
    `
    ${ContentNavItems} {
        justify-content: center;
        height: 43px;
        padding: 0;
      }

    ${ContentNavItemsNotification} {
        justify-content: center;
        height: 43px;
        padding: 0;
    }
    
    ${NavItem} {
      display: none;
      font-size: 0;
      opacity: 0;
    }

    ${TitleProfile}, ${UserName} {
      font-size: 0;
      opacity: 0;
      transition: ease all 0.3s;
    }
  
    ${ContainerProfile} {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contentProfileTitles {
      display: none;
    }
  `}

    @media screen and (max-width: 1020px){
      height: 100vh;
      border-radius: 0;
      box-shadow: 0 0 2px 2px #00000047;
      transform: translate(-80px, 0);

      ${ContainerSelectTheme} {
        bottom: 75px;
      }

      ${(props) => props.$isExpanded &&
        `
          transform: translate(0, 0);
        `
      }
    } 
`