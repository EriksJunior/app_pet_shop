/* eslint-disable react/prop-types */
import * as P from "./styles";

import { ActionButton } from "../UI/ActionButton";
import { SectionInputs } from "../UI/ContentInputsBox";
import { InputLabel } from "../UI/Inputs/InputText";
import { InputChecked } from "../UI/Inputs/InputChecked";
import { InputFile } from "../UI/Inputs/InputFile";
import { SelectBox } from "../UI/SelectBox";
import { SelectBoxInfiniteScroll } from "../UI/SelectBoxInfiniteScroll";
import { OffCanvas } from "../UI/OffCanvas";
import { PetDetails } from "../pet-details";

import { Container, Content } from "../../styles";

import { MdOutlineNotInterested } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { IoArrowBackSharp } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { UsePet } from "./hooks/usePet";
import { UseGeneral } from "../../hook/useGeneral";
import { useFormPet } from "./hooks/useFormPet";
import {
  SET_DATA_PET,
  SET_IDCUSTOMER_SELECTED,
  SET_FORM_ENABLED,
} from "./store/reducers";

import { Breed } from "../breed";
import { status, gender, sterilization } from "./common";

export function Pet() {
  const { pet, formEnabled, customerPets } = useSelector(
    (state) => state.petReducer
  );

  const dispatch = useDispatch();

  const { handleChange, handleTitleOffCanvas } = useFormPet();
  const { closeOffCanvas, isOffCanvasOpen, toggleOffCanvas } = UseGeneral();
  const {
    findCustomer,
    clearCustomerPets,
    findPetsByCustomer,
    handleClear,
    breedsToSelectBox,
    save,
    refPet,
    handleValidateNewPet,
    findBreedFromSelectBox,
    detailsPetEnable,
    handleShowPet,
    detailsPet,
    handleToggleDetailsAndClear,
  } = UsePet(toggleOffCanvas);

  return (
    <Container>
      <Content>
        <P.ContainerPet>
          <SectionInputs
            padding={"16px 0"}
            label={"Selecione seu cliente"}
            icon={<P.UsersIcon size={20} />}
            width={"350px"}
            large
          >
            <Row sm={12} md={12} lg={12} xl={12} className="pb-5">
              <Col sm={12} md={12} lg={12} xl={12} className="mt-2">
                <SelectBoxInfiniteScroll
                  textLabel={"Clientes"}
                  placeholder="Selecione um cliente"
                  principalKey={"id"}
                  textOption={"nome"}
                  innerRef={refPet.idCliente}
                  loadingNewItems={findCustomer}
                  actionWhenWriting={clearCustomerPets}
                  selectItem={(id) => {
                    findPetsByCustomer(id),
                      dispatch(SET_IDCUSTOMER_SELECTED(id));
                  }}
                />
              </Col>
            </Row>
          </SectionInputs>

          <P.ContainerCardsPet>
            <div className="contentHeaderCards">
              <div className="titleAndIcon">
                <P.PawIcons size={20} />
                <p className="title">
                  {!detailsPetEnable
                    ? "Pets Registrados"
                    : "Informações do pet"}
                </p>
              </div>

              {!detailsPetEnable ? (
                <ActionButton
                  color={"aliceblue"}
                  text={"Novo Pet"}
                  width={"120px"}
                  boxShadow={"0 0px 2px 1px #55555542"}
                  fontSize={"12px"}
                  click={handleValidateNewPet}
                  className={"btnNewPet"}
                  icon={<TiPlus size={18} />}
                />
              ) : (
                <ActionButton
                  color={"aliceblue"}
                  text={"Voltar"}
                  width={"100px"}
                  boxShadow={"0 0px 2px 1px #55555542"}
                  fontSize={"12px"}
                  click={handleToggleDetailsAndClear}
                  className={"btnNewPet"}
                  icon={<IoArrowBackSharp size={18} />}
                />
              )}
            </div>

            {!detailsPetEnable ? (
              <P.ContentCardsPet className="mt-2">
                {customerPets.length ? (
                  customerPets.map((pet, i) => (
                    <div key={i}>
                      <P.CardPet onClick={() => handleShowPet(pet.id)}>
                        <span className="removePet">
                          <P.RemoveIcon size={26} cursor={"pointer"} />
                        </span>

                        <div className="contentNotImageSelect">
                          <div className="contentIconNotImage">
                            {!pet?.urlFoto ? (
                              <MdOutlineNotInterested
                                size={100}
                                className="iconNotImage"
                              />
                            ) : (
                              <img
                                className="imgPet"
                                src={"noImagePet.png"}
                                alt="pet image"
                                height={100}
                                width={100}
                                style={{
                                  borderRadius: "8px",
                                }}
                              />
                            )}
                          </div>

                          <P.HeaderCardPet style={{ width: "100%" }}>
                            <p className="namePet">{pet.nome}</p>
                            <p className="totalsSchedules">23 Agendamentos</p>
                          </P.HeaderCardPet>
                        </div>
                      </P.CardPet>
                    </div>
                  ))
                ) : (
                  <span className="noPetsFoundTitle">
                    <p>Nenhum Pet encontrado . . . </p>
                  </span>
                )}
              </P.ContentCardsPet>
            ) : (
              <PetDetails petInfo={detailsPet} />
            )}
          </P.ContainerCardsPet>
        </P.ContainerPet>
      </Content>

      <OffCanvas
        expanded={isOffCanvasOpen}
        onClose={closeOffCanvas}
        title={handleTitleOffCanvas()}
        clearValues={handleClear}
      >
        <div style={!formEnabled.pet ? { display: "none" } : {}}>
          <SectionInputs padding={"16px 0"}>
            <Row className="mb-2">
              <InputFile
                getValues={(file) =>
                  dispatch(SET_DATA_PET({ ...pet, files: [file] }))
                }
              />
            </Row>

            <Row sm={12} md={12} lg={12} xl={12} className="pb-4">
              <Col sm={8} md={8} lg={8} xl={8} className="mt-2">
                <InputLabel
                  name={"nome"}
                  textLabel={"Nome"}
                  handleChange={handleChange}
                  value={pet.nome}
                  innerRef={refPet.nome}
                />
              </Col>

              <Col sm={4} md={4} lg={4} xl={4} className="mt-2">
                <InputLabel
                  name={"pelagem"}
                  textLabel={"Pelagem"}
                  handleChange={handleChange}
                  value={pet.pelagem}
                />
              </Col>
            </Row>

            <Row sm={12} md={12} lg={12} xl={12} className="pb-4">
              <Col sm={4} md={4} lg={5} xl={4}>
                <SelectBox
                  blockedWriting
                  textLabel={"Raça"}
                  enableButton
                  textButton={"Nova Raça"}
                  principalKey={"id"}
                  textOption={"nome"}
                  clickButton={() => dispatch(SET_FORM_ENABLED("raca"))}
                  items={breedsToSelectBox}
                  value={pet.idRaca}
                  innerRef={refPet.idRaca}
                  selectItem={(item) =>
                    dispatch(SET_DATA_PET({ ...pet, idRaca: item }))
                  }
                />
              </Col>

              <Col sm={4} md={4} lg={4} xl={4}>
                <SelectBox
                  blockedWriting
                  textLabel={"Genêro"}
                  principalKey={"value"}
                  textOption={"text"}
                  items={gender}
                  value={pet.genero}
                  innerRef={refPet.genero}
                  selectItem={(item) =>
                    dispatch(SET_DATA_PET({ ...pet, genero: item }))
                  }
                />
              </Col>

              <Col sm={4} md={4} lg={4} xl={4}>
                <InputLabel
                  name={"dataNascimento"}
                  textLabel={"Data Nascimento"}
                  typeInput="date"
                  handleChange={handleChange}
                  value={pet.dataNascimento}
                  innerRef={refPet.dataNascimento}
                />
              </Col>
            </Row>

            <Row sm={12} md={12} lg={12} xl={12} className="pb-4">
              <Col sm={4} md={4} lg={4} xl={4}>
                <SelectBox
                  blockedWriting
                  textLabel={"Esterelizado"}
                  principalKey={"value"}
                  textOption={"text"}
                  items={sterilization}
                  value={pet.esterilizacao}
                  innerRef={refPet.esterilizacao}
                  selectItem={(item) =>
                    dispatch(SET_DATA_PET({ ...pet, esterilizacao: item }))
                  }
                />
              </Col>

              <Col sm={4} md={4} lg={4} xl={4}>
                <SelectBox
                  blockedWriting
                  textLabel={"Status"}
                  principalKey={"value"}
                  textOption={"text"}
                  items={status}
                  value={pet.status}
                  innerRef={refPet.status}
                  selectItem={(item) =>
                    dispatch(SET_DATA_PET({ ...pet, status: item }))
                  }
                />
              </Col>

              <Col sm={4} md={4} lg={4} xl={4}>
                <InputChecked
                  name={"pedigree"}
                  textLabel={"Tem Pedigree ?"}
                  typeInput="checkbox"
                  handleChange={handleChange}
                  checked={pet.pedigree}
                />
              </Col>
            </Row>

            <Row sm={12} md={12} lg={12} xl={12} className="mb-5">
              {pet.pedigree && (
                <Col sm={5} md={5} lg={5} xl={5}>
                  <InputLabel
                    name={"numeroPedigree"}
                    textLabel={"Numero do pedigree"}
                    handleChange={handleChange}
                    value={pet.numeroPedigree}
                  />
                </Col>
              )}

              {pet.pedigree && (
                <Col sm={3} md={3} lg={3} xl={3}>
                  <InputLabel
                    name={"chip"}
                    textLabel={"Chip"}
                    handleChange={handleChange}
                    value={pet.chip}
                  />
                </Col>
              )}
            </Row>

            {formEnabled.pet && (
              <Row>
                <Col sm={4} md={4} lg={4} xl={4}>
                  <ActionButton
                    text={"Registrar"}
                    backgroundColor={"#0ad4e0"}
                    color={"aliceblue"}
                    width={"100px"}
                    boxShadow={"0 0px 2px 1px #55555542"}
                    hoverColor={"#06c8d3"}
                    fontSize={"12px"}
                    click={save}
                    className={"btnRegisterPet"}
                  />
                </Col>
              </Row>
            )}
          </SectionInputs>
        </div>

        {(formEnabled.raca || formEnabled.especie) && (
          <div className="mt-5">
            <Breed
              clickCancel={() => dispatch(SET_FORM_ENABLED("pet"))}
              breedIsSaved={findBreedFromSelectBox}
              getFromElenabled={(formEnabled) =>
                dispatch(SET_FORM_ENABLED(formEnabled))
              }
            />
          </div>
        )}
      </OffCanvas>
    </Container>
  );
}
