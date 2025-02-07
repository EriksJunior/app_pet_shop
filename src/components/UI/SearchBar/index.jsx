/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { InputLabel } from "../Inputs/InputText";
import * as S from "./styles";

import {
  defaultFilterOptions,
  defaultIsActiveOptions,
  defaultSituationOptions,
} from "./common";

export function SearchBar({
  placeholder = "Realize aqui a sua busca",
  searchIconColor = "#47d2a9",
  filterIconColor = "#47d2a9",
  filterOptions = defaultFilterOptions,
  isActiveOptions = defaultIsActiveOptions,
  situationOptions = defaultSituationOptions,
  filterOptionsIsEnable = true,
  periodIsEnable = false,
  isActiveOptionsIsEnable = false,
  situationOptionsIsEnable = false,
  getValues,
  defaultFilter,
}) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [widthElement, setWidthElement] = useState(0);
  const [filter, setFilter] = useState({
    text: "",
    type: defaultFilter,
    isActive: true,
    situation: "",
    startDate: "",
    endDate: "",
    page: 1
  });

  const refFilterOptions = useRef("");

  const handleFilterBoxClick = (event) => {
    event.stopPropagation();
  };

  const handleFilterIconClick = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  const getElementWidth = () => {
    if (refFilterOptions.current) {
      setWidthElement(refFilterOptions.current.offsetWidth);
    }
  };

  const handleChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  useEffect(() => {
    getValues(filter);
  }, [filter])

  useEffect(() => {
    if (isFilterBoxOpen) {
      getElementWidth();
    }
  }, [isFilterBoxOpen]);

  return (
    <S.SearchContainer>
      <S.SearchContent>
        <S.SearchIcon
          size={35}
          $searchIconColor={searchIconColor}
          onClick={() => console.log(filter)}
        />

        <S.Label htmlFor="inputSearch">
          <S.InputSearch
            type="text"
            id="inputSearch"
            name="text"
            placeholder={placeholder}
            onInput={({ target }) => handleChange(target.name, target.value)}
          />
        </S.Label>

        <S.containerFilterOptionsBox htmlFor="contentFilterOptions">
          <S.FilterIcon
            size={35}
            $filterIconColor={filterIconColor}
            onClick={handleFilterIconClick}
          />
          <S.InputFilterBoxOptions type="radio" id="contentFilterOptions" />

          <S.ContentBoxOptions
            className="filterOptionsBox"
            onClick={handleFilterBoxClick}
            $isFilterBoxOpen={isFilterBoxOpen}
          >
            {filterOptionsIsEnable && (
              <div>
                <S.TitleBoxOptions>Filtros</S.TitleBoxOptions>

                <S.ContentOptions
                  ref={refFilterOptions}
                  $actualWidth={widthElement}
                >
                  {filterOptions.map((option, i) => (
                    <S.LabelOptions
                      htmlFor={`filter-${i}`}
                      key={option.value || i}
                    >
                      <S.InputFilterBoxOptions
                        type="radio"
                        id={`filter-${i}`}
                        name="type"
                        onInput={({ target }) =>
                          handleChange(target.name, option.value)
                        }
                        defaultChecked={option.isActive}
                      />
                      <S.Options>{option.text}</S.Options>
                    </S.LabelOptions>
                  ))}
                </S.ContentOptions>
              </div>
            )}

            {isActiveOptionsIsEnable && (
              <div>
                <S.TitleBoxOptions>Status</S.TitleBoxOptions>

                <S.ContentOptions>
                  {isActiveOptions.map((status, i) => (
                    <S.LabelOptions
                      htmlFor={`status-${i}`}
                      key={status.value || i}
                    >
                      <S.InputFilterBoxOptions
                        type="radio"
                        id={`status-${i}`}
                        name="isActive"
                        onChange={({ target }) =>
                          handleChange(target.name, status.value)
                        }
                        defaultChecked={status.value}
                      />
                      <S.Options>{status.text}</S.Options>
                    </S.LabelOptions>
                  ))}
                </S.ContentOptions>
              </div>
            )}

            {situationOptionsIsEnable && (
              <div>
                <S.TitleBoxOptions>Situação</S.TitleBoxOptions>

                <S.ContentOptions>
                  {situationOptions.map((situation, i) => (
                    <S.LabelOptions
                      htmlFor={`situation-${i}`}
                      key={situation.value || i}
                    >
                      <S.InputFilterBoxOptions
                        type="radio"
                        id={`situation-${i}`}
                        name="situation"
                        onInput={({ target }) =>
                          handleChange(target.name, situation.value)
                        }
                      />
                      <S.Options>{situation.text}</S.Options>
                    </S.LabelOptions>
                  ))}
                </S.ContentOptions>
              </div>
            )}

            {periodIsEnable && (
              <div>
                <S.TitleBoxOptions>Períodos</S.TitleBoxOptions>

                <S.ContentOptions>
                  <div style={{ width: "125px" }}>
                    <InputLabel
                      typeInput="date"
                      labelFixed
                      textLabel="Inicio"
                      colorLabel={"#808080c2"}
                      handleChange={({ target }) =>
                        handleChange(target.name, target.value)
                      }
                      name={"startDate"}
                      value={filter.startDate}
                    />
                  </div>
                  <div style={{ width: "125px" }}>
                    <InputLabel
                      typeInput="date"
                      labelFixed
                      textLabel="Fim"
                      colorLabel={"#808080c2"}
                      handleChange={({ target }) =>
                        handleChange(target.name, target.value)
                      }
                      name={"endDate"}
                      value={filter.endDate}
                    />
                  </div>
                </S.ContentOptions>
              </div>
            )}
          </S.ContentBoxOptions>
        </S.containerFilterOptionsBox>
      </S.SearchContent>
    </S.SearchContainer>
  );
}
