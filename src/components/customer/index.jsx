/* eslint-disable react/prop-types */
import { Container, Content, Divider } from "../../styles";
import {InfoPersonIcon, LocationIcon, AdditionalInfoIcon, ContactsIcon} from "./styles"

import { useSelector, useDispatch } from "react-redux";
import { useFormCustomer } from "./hooks/useFormCustomer";
import { UseCustomer } from "./hooks/useCustomer";
import { SET_DATA_CUSTOMER } from "./store/reducers";

import { Contacts } from "../contacts";
import { ActionButton } from "../UI/ActionButton";
import { FooterActions } from "../UI/FooterActions";
import { InputLabel } from "../UI/Inputs/InputText";
import { InputCpfCnpj } from "../UI/Inputs/InputCpfCnpj";
import { InputCep } from "../UI/Inputs/InputCep";
import { InputPhone } from "../UI/Inputs/InputPhone";
import { SectionInputs } from "../UI/ContentInputsBox";
import { SelectBox } from "../UI/SelectBox";

import { Row, Col } from "react-bootstrap";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { PiGearFill } from "react-icons/pi";

import { type_consumer, contributor } from "./common";

export function Customer({ closeBigBox, searchCustomers }) {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.customer);
  const { handleChange } = useFormCustomer();
  const { save, refCustomer } = UseCustomer(closeBigBox, searchCustomers);

  return (
    <Container>
      <Content>
        <SectionInputs
          label={"Informações gerais"}
          icon={<InfoPersonIcon size={20} />}
        >
          <Row sm={12} md={12} lg={12} xl={12}>
            <Col sm={6} md={7} lg={7} xl={3} className="mt-3">
              <InputLabel
                name={"nome"}
                textLabel={"Nome"}
                handleChange={handleChange}
                value={customer.nome}
                innerRef={refCustomer.nome}
              />
            </Col>

            <Col sm={6} md={5} lg={5} xl={2} className="mt-3">
              <InputCpfCnpj
                name={"cpfCnpj"}
                textLabel={"CPF / CNPJ"}
                handleChange={handleChange}
                value={customer.cpfCnpj}
              />
            </Col>

            <Col sm={4} md={4} lg={3} xl={2} className="mt-3">
              <InputLabel
                name={"ie"}
                textLabel={"(I.E) Inscrição Estadual"}
                handleChange={handleChange}
                value={customer.ie}
              />
            </Col>

            <Col sm={4} md={4} lg={4} xl={2} className="mt-3">
              <InputLabel
                name={"im"}
                textLabel={"(I.M) Inscrição Municipal"}
                handleChange={handleChange}
                value={customer.im}
              />
            </Col>

            <Col sm={4} md={4} lg={5} xl={3} className="mt-3">
              <InputLabel
                name={"nif"}
                textLabel={"(NIF) N° identificação fiscal"}
                handleChange={handleChange}
                value={customer.nif}
              />
            </Col>
          </Row>

          <Row sm={12} md={12} lg={12} xl={12} className="pb-2">
            <Col sm={12} md={6} lg={6} xl={3} className="mt-4">
              <InputLabel
                name={"email"}
                textLabel={"E-mail"}
                handleChange={handleChange}
                value={customer.email}
              />
            </Col>

            <Col sm={6} md={3} lg={3} xl={2} className="mt-4">
              <InputPhone
                name={"telefone"}
                textLabel={"Telefone"}
                handleChange={handleChange}
                value={customer.telefone}
              />
            </Col>

            <Col sm={6} md={3} lg={3} xl={2} className="mt-4">
              <InputPhone
                name={"celular"}
                textLabel={"Celular"}
                handleChange={handleChange}
                value={customer.celular}
                isCellPhone
              />
            </Col>
          </Row>
        </SectionInputs>

        <Divider>
          <hr />
        </Divider>

        <SectionInputs
          label={"Localização"}
          icon={<LocationIcon size={20}/>}
        >
          <Row sm={12} md={12} lg={12} xl={12} className="pb-2">
            <Col sm={12} md={6} lg={4} xl={3} className="mt-3">
              <InputLabel
                name={"endereco"}
                textLabel={"Endereço"}
                handleChange={handleChange}
                value={customer.endereco}
              />
            </Col>

            <Col sm={6} md={6} lg={4} xl={3} className="mt-3">
              <InputLabel
                name={"bairro"}
                textLabel={"Bairro"}
                handleChange={handleChange}
                value={customer.bairro}
              />
            </Col>

            <Col sm={6} md={4} lg={3} xl={2} className="mt-3">
              <InputLabel
                name={"complemento"}
                textLabel={"Complemento"}
                handleChange={handleChange}
                value={customer.complemento}
              />
            </Col>

            <Col sm={2} md={2} lg={1} xl={1} className="mt-3">
              <InputLabel
                name={"numero"}
                textLabel={"Nº"}
                typeInput="number"
                handleChange={handleChange}
                value={customer.numero}
              />
            </Col>

            <Col sm={4} md={4} lg={3} xl={3} className="mt-3">
              <InputLabel
                name={"cidade"}
                textLabel={"Cidade"}
                handleChange={handleChange}
                value={customer.cidade}
              />
            </Col>

            <Col sm={3} md={2} lg={1} xl={1} className="mt-3">
              <InputLabel
                name={"uf"}
                textLabel={"UF"}
                handleChange={handleChange}
                value={customer.uf?.toUpperCase()}
                maxLength={2}
              />
            </Col>

            <Col sm={3} md={3} lg={2} xl={2} className="mt-3">
              <InputCep
                name={"cep"}
                textLabel={"Cep"}
                handleChange={handleChange}
                value={customer.cep}
              />
            </Col>
          </Row>
        </SectionInputs>

        <Divider>
          <hr />
        </Divider>

        <SectionInputs
          label={"informações adicionais"}
          icon={<AdditionalInfoIcon size={20} />}
        >
          <Row sm={12} md={12} lg={12} xl={12} className="pb-2">
            <Col sm={6} md={3} lg={2} xl={2} className="mt-3">
              <InputLabel
                name={"dataNascimento"}
                textLabel={"Data de nascimento"}
                typeInput="date"
                handleChange={handleChange}
                value={customer.dataNascimento}
              />
            </Col>

            <Col sm={6} md={4} lg={5} xl={5} className="mt-3">
              <SelectBox
                blockedWriting
                textLabel={"Tipo de consumidor"}
                textOption={'text'}
                principalKey={'value'}
                items={type_consumer}
                value={customer.consumidor_final}
                selectItem={(item) =>
                  dispatch(
                    SET_DATA_CUSTOMER({ ...customer, consumidor_final: item })
                  )
                }
              />
            </Col>

            <Col sm={12} md={5} lg={5} xl={5} className="mt-3">
              <SelectBox
                blockedWriting
                textLabel={"Contribuinte"}
                textOption={'text'}
                principalKey={'value'}
                items={contributor}
                value={customer.contribuinte}
                selectItem={(item) =>
                  dispatch(
                    SET_DATA_CUSTOMER({ ...customer, contribuinte: item })
                  )
                }
              />
            </Col>

            <Col sm={12} md={12} lg={12} xl={12} className="mt-4">
              <InputLabel
                name={"observacao"}
                textLabel={"Observação"}
                handleChange={handleChange}
                value={customer.observacao}
              />
            </Col>
          </Row>
        </SectionInputs>

        <Divider>
          <hr />
        </Divider>

        <SectionInputs
          label={"Contatos"}
          icon={<ContactsIcon size={20} />}
        >
          <Contacts />
        </SectionInputs>

        {/* TODO - VERIFICAR ALGUMA FORMA PARA EXIBIR OS PETS AO EDITAR */}
      </Content>

      <FooterActions>
        <div
          style={{
            transition: "ease-in all 0.4s",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ width: "150px" }}>
            <ActionButton
              backgroundColor={"#3cb3f8"}
              border={"solid 1px #3cb3f8"}
              hoverColor={"#3292c9"}
              color={"#f5f5f5"}
              text={"Voltar"}
              icon={<MdOutlineKeyboardBackspace size={18} />}
              click={() => alert("Voltando")}
            />
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ width: "150px" }}>
              <ActionButton
                backgroundColor={"#0ad4e0"}
                border={"solid 1px #0ad4e0"}
                hoverColor={"#09b4bd"}
                text={"Salvar"}
                icon={<FaUserCheck size={18} />}
                click={save}
              />
            </div>

            <div style={{ width: "150px" }}>
              <ActionButton
                backgroundColor={"#47d2a9"}
                border={"solid 1px #47d2a9"}
                hoverColor={"#3aab89"}
                text={"Ações"}
                icon={<PiGearFill size={18} />}
                click={() => alert("abrindo ações")}
              />
            </div>
          </div>
        </div>
      </FooterActions>
    </Container>
  );
}
