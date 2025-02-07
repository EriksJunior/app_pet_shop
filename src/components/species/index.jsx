/* eslint-disable react/prop-types */
import { Table } from "../UI/Table";
import { UseFormSpecies } from "./hooks/useFormSpecies";
import { UseSpecies } from "./hooks/useSpecies";
import { UseSearchSpecies } from "./hooks/useSearchSpecies";

import { Col, Row } from "react-bootstrap";
import { SectionInputs } from "../UI/ContentInputsBox";
import { InputLabel } from "../UI/Inputs/InputText";
import { ActionButton } from "../UI/ActionButton";

export function Species({ clickCancel, getValue, specieIsSaved }) {
  const { tableActions, dataSearch, findAll, clear } = UseSearchSpecies();
  const { handleChange, species, clearSpecie } = UseFormSpecies();
  const { handleSaveOrUpdate, refSpecie } = UseSpecies(
    getValue,
    specieIsSaved,
    findAll,
    clear
  );

  return (
    <>
      <SectionInputs padding={"0 0"}>
        <Row sm={12} md={12} lg={12} xl={12} className="pb-4">
          <Col sm={12} md={12} lg={12} xl={12}>
            <InputLabel
              name={"nome"}
              textLabel={"Nome da Espécie"}
              handleChange={handleChange}
              value={species.nome}
              innerRef={refSpecie.nome}
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
              click={() => handleSaveOrUpdate()}
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
                clickCancel(), clearSpecie();
              }}
            />
          </div>
        </Row>
      </SectionInputs>

      <div style={{ marginTop: "10rem" }}>
        <Table
          enableTitleTable
          titleTable="Espécies Registradas"
          maxHeight="400px"
          items={dataSearch}
          dropDownItems={tableActions}
          valueToJoinHtmlFor="species"
        />
      </div>
    </>
  );
}
