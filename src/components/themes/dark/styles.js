import { css } from "styled-components";

import { darkTheme } from ".";

import * as BigBox from "../../UI/BigBox/styles";
import { InputText, InputTextArea } from "../../UI/Inputs/styles";
import { CustomInputFile } from "../../UI/Inputs/InputFile/styles";
import { Container as CardContainer } from "../../UI/Card/styles";
import { SelectBox, Ul as SelectBoxUl, Li as SelectBoxLi, Container as SelectContainer, ArrowDown as ArrowSelectBox } from "../../UI/SelectBox/styles";
import { SelectBoxInfinite, Ul as SelectInfiniteUl, Li as SelectInfiniteLi, Container as SelectInfiniteContainer, ArrowDown as ArrowDownSelectInfinite } from "../../UI/SelectBoxInfiniteScroll/styles";
import { Container as DropDownContainer, Li as DropDownContainerLi } from "../../UI/DropDown/styles";
import { InputSearch, SearchContent } from "../../UI/SearchBar/styles";
import { InfoPersonIcon, LocationIcon, AdditionalInfoIcon, ContactsIcon } from "../../customer/styles";
import { ContentItems } from "../../contacts/styles";
import { Content as OffCanvasContent, Title as OffCanvasTitle, Label as OffCanvasLabel } from "../../UI/OffCanvas/styles";
import { Footer as FooterActions, FooterContent } from "../../UI/FooterActions/style";
import { UsersIcon as PetUsersIcon, PawIcons as PetPawIcons, RemoveIcon as PetRemoveIcon, ContentCardsPet, CardPet, HeaderCardPet } from "../../pet/styles";
import { Content as GeneralContent } from "../../UI/Content/styles";
import { Container as ContainerCard } from "../../UI/Card/styles";

export const DarkTheme = css`
 .dark-mode {
    height: 100%;
    background-color: ${darkTheme.primary};

    ${InputText}, ${InputTextArea}, ${SelectBox}, ${SelectBoxInfinite} {
      background-color: ${darkTheme.seconday};
      border: 1px solid #3d3d3d;
      color: whitesmoke;
    }

    ${BigBox.Container} {
      background-color: ${darkTheme.modalsBackground};
    }

    ${BigBox.TitleHeader} {
      color: ${darkTheme.success};
    }

    ${InputText}:focus, ${InputTextArea}:focus, ${SelectBox}:focus, ${SelectBoxInfinite}:focus {
      border: 1px solid ${darkTheme.success};
    }

    ${CustomInputFile} {
      border: solid 3px ${darkTheme.success};
      box-shadow: 0 0 3px 0 ${darkTheme.success};
    }

    ${CustomInputFile}:hover {
      background-color: #a1a1a10d;
      box-shadow: 0 0 5px 0 white;
    } 

    ${InputSearch}, ${SearchContent} {
      background-color: ${darkTheme.seconday};
      color: white;
    }

    ${SelectContainer}, ${SelectInfiniteContainer}, ${DropDownContainer} {
      background-color: ${darkTheme.darkSuccess};
    }

    ${SelectBoxLi}, ${SelectInfiniteLi}, ${DropDownContainerLi}{
      color: white!important;
    }

    ${SelectBoxLi}:hover, ${SelectInfiniteLi}:hover, ${DropDownContainerLi}:hover {
      background-color: #2c9374!important;
    }

    ${SelectInfiniteUl}, ${SelectBoxUl} {
      &::-webkit-scrollbar-thumb {
        background-color: #30876d!important;
      }

      &::-webkit-scrollbar-track {
        background: transparent!important;
      }
    }

    ${ArrowSelectBox}, ${ArrowDownSelectInfinite} {
      border-top: 6px solid ${darkTheme.darkSuccess};
    }

    ${InfoPersonIcon}, ${LocationIcon}, ${AdditionalInfoIcon}, ${ContactsIcon} {
      color: ${darkTheme.success};
    }

    ${OffCanvasContent} {
      background-color: ${darkTheme.modalsBackground};
    }

    ${OffCanvasTitle} {
      color: ${darkTheme.success};
    }

    ${OffCanvasLabel}:hover {
      border: solid 2px ${darkTheme.success};
    }

    ${FooterActions} {
      background-color: ${darkTheme.primary};
    }

    ${FooterContent} {
      box-shadow: 0px -1px 2px 0 #0000005c;
    }

    ${CardContainer} {
      background-color: ${darkTheme.seconday};
    }

    ${GeneralContent} {
      background-color: ${darkTheme.primary};
    }

    ${ContainerCard}:hover {
      background-color: #1818188c;
      transition: ease-in all 0.1s;
      box-shadow: 0 0 2px 1px ${darkTheme.success};
    }

    /* PET */
    .btnRegisterPet, .btnNewPet {
      background-color: ${darkTheme.darkSuccess}!important;
    }

    .btnRegisterPet:hover, .btnNewPet:hover {
      background-color: #339d7d!important;
    }

    ${PetUsersIcon}, ${PetPawIcons} {
      color: ${darkTheme.success};
    }

    ${PetRemoveIcon} {
      color: white;
    }

    ${ContentCardsPet} {
        .removePet {
          background-color: ${darkTheme.success};
        }

        .removePet:hover {
          background-color: ${darkTheme.darkSuccess};
        }
      }
        
    ${CardPet} {
      background-color: #1818188c;
      box-shadow: 0 0 2px 0 #00000087!important;
      transition: ease-in all 0.1s;
      border: solid 1px #3d3d3d;

      .contentIconNotImage {
        transition: ease-in all 0.1s;
        background-color: #313131;
      }
    }

    ${CardPet}:hover {
      background-color: black;
      cursor: pointer;
      box-shadow: 0 0 4px 0 #00000087!important;
      border: solid 1px ${darkTheme.darkSuccess};
      transition: ease-in all 0.1s;

      .contentIconNotImage {
        transition: ease-in all 0.1s;
        background-color: #a1a1a1;
      }
    }

    ${HeaderCardPet} {
      .namePet {
        color: #a1a1a1
      }
      
      .totalsSchedules {
        color: #717171;
      }
    }
    /* PET */

    /* GLOBAl SCROLL BAR */
    ::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${darkTheme.success};
    }
    /* GLOBAl SCROLL BAR */

    @media screen and (max-width: 1200px){
      ${ContentItems} {
        box-shadow: 0px 0px 2px 0px ${darkTheme.success};
      }
    }
  }
`