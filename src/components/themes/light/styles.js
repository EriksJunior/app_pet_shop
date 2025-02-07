import { css } from "styled-components";

import { lightTheme } from ".";

import * as BigBox from "../../UI/BigBox/styles";
import { InputText, InputTextArea } from "../../UI/Inputs/styles";
import { CustomInputFile } from "../../UI/Inputs/InputFile/styles";
import { SelectBox, Ul as SelectBoxUl, Li as SelectBoxLi, Container as SelectContainer, ArrowDown as ArrowSelectBox } from "../../UI/SelectBox/styles";
import { SelectBoxInfinite, Ul as SelectInfiniteUl, Li as SelectInfiniteLi, Container as SelectInfiniteContainer, ArrowDown as ArrowDownSelectInfinite } from "../../UI/SelectBoxInfiniteScroll/styles";
import { Container as DropDownContainer } from "../../UI/DropDown/styles";
import { InputSearch, SearchContent } from "../../UI/SearchBar/styles";
import { InfoPersonIcon, LocationIcon, AdditionalInfoIcon, ContactsIcon } from "../../customer/styles";
import { ContentItems } from "../../contacts/styles";
import { Content as OffCanvasContent, Title as OffCanvasTitle, Label as OffCanvasLabel } from "../../UI/OffCanvas/styles";
import { UsersIcon as PetUsersIcon, PawIcons as PetPawIcons, RemoveIcon as PetRemoveIcon, ContentCardsPet, CardPet, HeaderCardPet } from "../../pet/styles";
import { Container as CardContainer } from "../../UI/Card/styles";
import { Content as GeneralContent } from "../../UI/Content/styles";
import { Container as ContainerCard } from "../../UI/Card/styles";

export const LightTheme = css`
  .light-mode {
    height: 100%;
    background-color: ${lightTheme.primary};

    ${InputText}:focus, ${InputTextArea}:focus, ${SelectBox}:focus, ${SelectBoxInfinite}:focus {
      border: 1px solid ${lightTheme.info};
    }

    ${InputSearch}, ${SearchContent} {
      background-color: ${lightTheme.light};
      color: black;
    }

    ${CustomInputFile} {
      border: solid 3px #06c8d375;
      box-shadow: 0 0 3px 0 ${lightTheme.darkInfo};
    }

    ${CustomInputFile}:hover {
      background-color: #a1a1a10d;
      box-shadow: 0 0 5px 0 ${lightTheme.darkInfo};
    } 

    ${BigBox.TitleHeader} {
      color: ${lightTheme.darkInfo};
    }

    ${InfoPersonIcon}, ${LocationIcon}, ${AdditionalInfoIcon}, ${ContactsIcon} {
      color: ${lightTheme.darkInfo};
    }

    ${SelectContainer}, ${SelectInfiniteContainer}, ${DropDownContainer} {
      background-color: ${lightTheme.info};
    }

    ${SelectBoxLi}, ${SelectInfiniteLi}{
      color: ${lightTheme.light}!important;
    }

    ${SelectInfiniteUl}, ${SelectBoxUl} {
      &::-webkit-scrollbar-track {
        background: transparent!important;
      }
    }

    ${ArrowSelectBox}, ${ArrowDownSelectInfinite} {
      border-top: 6px solid ${lightTheme.darkInfo};
    }

    ${OffCanvasContent} {
      background-color: ${lightTheme.primary};
    }

    ${OffCanvasTitle} {
      color: ${lightTheme.darkInfo};
    }

    ${OffCanvasLabel}:hover {
      border: solid 2px ${lightTheme.darkInfo};
    }

    ${CardContainer} {
      background-color: white;
    }

    ${GeneralContent} {
      background-color: #e3e3e3;
    }

    ${ContainerCard}:hover {
      background-color: ${lightTheme.primary};
      transition: ease-in all 0.1s;
      box-shadow: 0 0 2px 1px ${lightTheme.darkInfo};
    }


    /* PET */
    .btnRegisterPet, .btnNewPet {
      background-color: ${lightTheme.darkInfo}!important;
    }

    .btnRegisterPet:hover, .btnNewPet:hover {
      background-color: #06c8d3!important;
    }

    ${PetUsersIcon}, ${PetPawIcons} {
      color: ${lightTheme.darkInfo};
    }

    ${PetRemoveIcon} {
      color: ${lightTheme.light};
    }

    ${ContentCardsPet} {
      .removePet {
        background-color: ${lightTheme.info};
      }

      .removePet:hover {
        background-color: ${lightTheme.darkInfo};;
      }
    }
 
    ${CardPet} {
      background-color: white;
      box-shadow: 0 0 3px 0 #00000047!important;
      transition: ease-in all 0.1s;

      .contentIconNotImage {
        transition: ease-in all 0.1s;
        background-color: #f5f5f5;
      }

      .iconNotImage {
        color: #c7c7c7;
      }
    }

    ${CardPet}:hover {
      background-color: #d9e3eb;
      cursor: pointer;
      box-shadow: 0 0 4px 0 #00000047!important;
      transition: ease-in all 0.1s;

      .contentIconNotImage {
        transition: ease-in all 0.1s;
        background-color: #a1a1a1;
      }
    }
    
    ${HeaderCardPet} {
      .namePet {
        color: #717171;
      }
      .totalsSchedules {
        color: #a1a1a1
      }
    }
    /* PET */

    /* GLOBAL SCROLL BAR */
    ::-webkit-scrollbar {
      width: 5px!important;
      height: 8px!important;
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${lightTheme.info};
    }
    /* GLOBAL SCROLL BAR */

    @media screen and (max-width: 1200px){
      ${ContentItems} {
        box-shadow: 0px 0px 4px 0px #00000059;
      }
    }
  }
`