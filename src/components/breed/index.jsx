/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { UseFormBreed } from "./hooks/useFormBreed";
import { UseBreed } from "./hooks/useBreed";
import { UseSearchBreed } from "./hooks/useSearchBreed";
import { SET_DATA_BREED } from "./store/reducers";

import { Col, Row } from "react-bootstrap";
import { Species } from "../species";
import { SectionInputs } from "../UI/ContentInputsBox";
import { SelectBox } from "../UI/SelectBox";
import { InputLabel } from "../UI/Inputs/InputText";
import { ActionButton } from "../UI/ActionButton";
import { Table } from "../UI/Table";

export function Breed({
  clickCancel,
  getValue,
  breedIsSaved,
  getFromElenabled,
}) {
  const { handleChange, breed, clearBreed } = UseFormBreed();
  const { dataSearch, tableActions, findAll } = UseSearchBreed();
  const {
    save,
    refBreed,
    speciesToSelectBox,
    formEnabled,
    handleFormEnabled,
    findSpeciesFromSelectBox,
  } = UseBreed(clearBreed, getValue, breedIsSaved, findAll);

  const dispatch = useDispatch();

  return (
    <>
      <div style={!formEnabled.raca ? { display: "none" } : {}}>
        <SectionInputs padding={"0 0"}>
          <Row sm={12} md={12} lg={12} xl={12} className="pb-4">
            <Col sm={8} md={8} lg={8} xl={8}>
              <InputLabel
                name={"nome"}
                textLabel={"Nome da Raça"}
                handleChange={handleChange}
                value={breed.nome}
                innerRef={refBreed.nome}
              />
            </Col>

            <Col sm={4} md={4} lg={4} xl={4}>
              <SelectBox
                name={"idEspecie"}
                blockedWriting
                textLabel={"Espécie"}
                enableButton
                textButton={"Nova Espécie"}
                principalKey={"id"}
                textOption={"nome"}
                clickButton={() => {
                  handleFormEnabled("especie"), getFromElenabled("especie");
                }}
                items={speciesToSelectBox}
                value={breed.idEspecie}
                innerRef={refBreed.idEspecie}
                selectItem={(item) =>
                  dispatch(SET_DATA_BREED({ ...breed, idEspecie: item }))
                }
              />
            </Col>
          </Row>

          <Row style={{ marginTop: "2rem" }}>
            <div style={{ width: "auto" }}>
              <ActionButton
                backgroundColor={"#0ad4e0"}
                color={"aliceblue"}
                text={"Registrar"}
                width={"100px"}
                boxShadow={"0 0px 2px 1px #55555542"}
                hoverColor={"#06c8d3"}
                fontSize={"12px"}
                click={() => save()}
                className={"btnRegisterPet"}
              />
            </div>

            <div style={{ width: "auto" }}>
              <ActionButton
                backgroundColor={"#c73838"}
                color={"aliceblue"}
                text={"Cancelar"}
                width={"100px"}
                boxShadow={"0 0px 2px 1px #55555542"}
                hoverColor={"brown"}
                fontSize={"12px"}
                click={() => {
                  clickCancel(), clearBreed();
                }}
              />
            </div>
          </Row>
        </SectionInputs>

        <div style={{ marginTop: "10rem" }}>
          <Table
            enableTitleTable
            titleTable="Raças Registradas"
            maxHeight="400px"
            items={dataSearch}
            dropDownItems={tableActions}
            valueToJoinHtmlFor="breed"
          />
        </div>
      </div>

      <div style={!formEnabled.especie ? { display: "none" } : {}}>
        <Species
          clickCancel={() => {
            handleFormEnabled("raca"), getFromElenabled("raca");
          }}
          specieIsSaved={findSpeciesFromSelectBox}
        />
      </div>
    </>
  );
}
