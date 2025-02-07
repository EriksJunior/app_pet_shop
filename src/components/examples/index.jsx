import { useState } from "react";

import { RegisterButton } from "../UI/registerButton";
import { ActionButton } from "../UI/ActionButton";
import { InputLabel } from "../UI/Inputs/InputText";
import { SelectBox } from "../UI/SelectBox";
import { SelectBoxInfiniteScroll } from "../UI/SelectBoxInfiniteScroll";
import { BigBox } from "../UI/BigBox";
import { HiPlus } from "react-icons/hi";
import { MdOutlinePets, MdOutlineKeyboardBackspace } from "react-icons/md";
import { PiGearFill } from "react-icons/pi";
import { SectionInputs } from "../UI/ContentInputsBox";
import { Col, Row } from "react-bootstrap";
import ServiceCustomer from "../customer/services";

export function Examples() {
  const [bigBoxIsOpen, setBigBoxIsOpen] = useState(false);
  const [petName, setPetName] = useState("");

  const openAndCloseBigBox = () => {
    setBigBoxIsOpen((state) => !state);
  };

  const handleChange = (event) => {
    setPetName(event.target.value);
  };

  const findCustomer = async (text, type, page) => {
    const customers = await ServiceCustomer.fillCombobox(text, type, page);
    if(customers && customers.length) {
      return customers.map(customer => {
        return{
          text: customer.nome,
          value: customer.id
        }
      })
    }
  };

  const teste = [
    { value: 1, text: "teste1" },
    { value: 2, text: "teste2" },
    { value: 3, text: "teste3" },
    { value: 4, text: "teste4" },
    { value: 5, text: "teste5" },
    { value: 6, text: "teste6" },
    { value: 7, text: "teste7" },
    { value: 8, text: "teste8" },
    { value: 9, text: "teste9" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "calc(100% - 3rem)" }}>
          <SectionInputs
            colorLabel={"#0ad4e0"}
            label={"Informações gerais"}
            icon={<HiPlus size={20} color="#0ad4e0" />}
          >
            <Row sm={12} md={12} lg={12} xl={12} className="mt-3">
              <Col sm={6} md={6} lg={3} xl={3}>
                <InputLabel
                  textLabel={"Nome do pet"}
                  value={petName}
                  handleChange={handleChange}
                  colorBackgroundLabel={"white"}
                />
              </Col>

              <Col sm={6} md={6} lg={3} xl={3}>
                <InputLabel
                  textLabel={"Nome do pet"}
                  value={petName}
                  handleChange={handleChange}
                  colorBackgroundLabel={"white"}
                />
              </Col>

              <Col sm={6} md={6} lg={3} xl={3}>
                <InputLabel
                  textLabel={"Nome do pet"}
                  value={petName}
                  handleChange={handleChange}
                  colorBackgroundLabel={"white"}
                />
              </Col>

              <Col sm={6} md={6} lg={3} xl={3}>
                <InputLabel
                  textLabel={"Nome do pet"}
                  value={petName}
                  handleChange={handleChange}
                  colorBackgroundLabel={"white"}
                />
              </Col>

              <Col className="mt-3" sm={6} md={6} lg={3} xl={3}>
                <InputLabel
                  textLabel={"Nome do pet"}
                  value={petName}
                  handleChange={handleChange}
                  colorBackgroundLabel={"white"}
                />
              </Col>
            </Row>
          </SectionInputs>
        </div>

        <div style={{ width: "18%" }}>
          <RegisterButton
            backgroundColor={"red"}
            click={() => alert("Bala de ice kiss, Raio laser hahaha")}
            icon={<HiPlus size={20} />}
            text={"Novo Pet"}
          />
        </div>

        <div style={{ width: "18%" }}>
          <ActionButton
            backgroundColor={"#f5f5f5"}
            border={"solid 1px #0fbf4d"}
            color={"#0fbf4d"}
            text={"Salvar"}
            icon={<MdOutlinePets size={18} />}
            click={() => alert(petName)}
          />
        </div>

        <div style={{ width: "18%" }}>
          <InputLabel
            textLabel={"Nome do pet"}
            value={petName}
            handleChange={handleChange}
          />
        </div>

        <div style={{ width: "18%" }}>
          <SelectBox
            textLabel={"Cliente"}
            icon={<HiPlus size={15} />}
            textButton="Novo Cliente"
            rincipalKey={"id"}
            textOption={"nome"}
            clickButton={openAndCloseBigBox}
            enableButton={true}
            selectItem={(item) => alert(`${item} Selecionado!`)}
            items={teste}
          />
        </div>

        <div style={{ width: "18%" }}>
          <SelectBoxInfiniteScroll
            textLabel={"Infinite Scroll"}
            icon={<HiPlus size={15} />}
            textButton="Novo Cliente"
            rincipalKey={"id"}
            textOption={"nome"}
            clickButton={openAndCloseBigBox}
            enableButton={true}
            selectItem={(item) => alert(`${item} Selecionado!`)}
            loadingNewItems={findCustomer}
          />
        </div>

        <BigBox
          open={bigBoxIsOpen}
          close={openAndCloseBigBox}
          colorTitle={"#0ad4e0"}
          actions={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "150px" }}>
                <ActionButton
                  backgroundColor={"#3cb3f8"}
                  border={"solid 1px #3cb3f8"}
                  color={"#f5f5f5"}
                  text={"Voltar"}
                  icon={<MdOutlineKeyboardBackspace size={18} />}
                  click={() => alert("Voltando")}
                />
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "150px" }}>
                  <ActionButton
                    backgroundColor={"#4ed37c"}
                    border={"solid 1px #4ed37c"}
                    color={"#f5f5f5"}
                    text={"Salvar"}
                    icon={<MdOutlinePets size={18} />}
                    click={() => alert("Salvando")}
                  />
                </div>

                <div style={{ width: "150px" }}>
                  <ActionButton
                    backgroundColor={"#47d2a9"}
                    border={"solid 1px #47d2a9"}
                    color={"#f5f5f5"}
                    text={"Ações"}
                    icon={<PiGearFill size={18} />}
                    click={() => alert("abrindo ações")}
                  />
                </div>
              </div>
            </div>
          }
        >
          {bigBoxIsOpen && <p>Conteúdo aqui</p>}
        </BigBox>
      </div>
    </div>
  );
}
