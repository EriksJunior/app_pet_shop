import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

export const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`

export const SearchContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 0.3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 #00000026;
`

export const Label = styled.label`
  width: 100%;
  padding: 0 0 0 0.5rem;
`

export const SearchIcon = styled(FiSearch)`
  color: white;
  background-color: ${props => props.$searchIconColor || "red"};
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  user-select: none!important;
`

export const FilterIcon = styled(FaFilter)`
  color: ${props => props.$filterIconColor || "red"};
  padding: 0.5rem;
  cursor: pointer;
  user-select: none!important;
`

export const InputSearch = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  font-size: 0.85rem;
`
export const containerFilterOptionsBox = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputFilterBoxOptions = styled.input`
 width: 0!important; 
 height: 0!important;
 display: none;
`

export const ContentBoxOptions = styled.div`
  &::-webkit-scrollbar {
    width: 5px!important;
    height: 8px!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: white!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #44d2db!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
${(props) => props.$isFilterBoxOpen ?
    `
      width: auto;
      padding: 1rem;
      background-color: white;
      box-shadow: 0 1px 4px 0 #00000026;
      border-radius: 8px;
      position: absolute;
      z-index: 100;
      top: 50px;
      right: -0.3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      user-select: none;
      max-height: 262px;
      overflow: auto;
    `
    :
    `
      display: none;
    `
  }
`

export const TitleBoxOptions = styled.p`
  color: #47d2a9;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.3rem;
`

export const ContentOptions = styled.div`
  display: flex;
  gap: 1rem;
  ${(props) => props.$actualWidth >= 270 &&
    `
      min-width: 270px; 
      flex-wrap: wrap;
    `
  }
`

export const Options = styled.p`
  color: #00000066;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
`

export const LabelOptions = styled.label`
  cursor: pointer !important;

  input:checked + ${Options} {
    color: #808080c2;
    font-weight: 600;
    text-decoration: underline;
  }
`;