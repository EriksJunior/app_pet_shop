/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_CONTACTS } from "../customer/store/reducers";
import { useDiffContacts } from "./hooks/useDiffContacts";
import { useHandleContacts } from "./hooks/useHandleContacts";

import * as C from "./styles";
import { InputLabel } from "../UI/Inputs/InputText";
import { InputPhone } from "../UI/Inputs/InputPhone";
import { SelectBox } from "../UI/SelectBox";
import { Switch } from "../UI/Switch";

import { type_contacts, operatings } from "./common";
import { INITIAL_STATE_CONTACTS } from "./initialState";

export function Contacts() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.customer);
  const {
    handleContacts,
    selectedContacts,
    addMoreContacts,
    handleAfertEditOrRemove,
  } = useDiffContacts();
  const { handleChange, handleChangeWithWhatsapp } = useHandleContacts();

  const removeContacts = (idList) => {
    if (customer.contacts.length === 1) {
      handleAfertEditOrRemove([
        { ...INITIAL_STATE_CONTACTS, idList: uuidv4() },
      ]);
      return dispatch(
        SET_DATA_CONTACTS([{ ...INITIAL_STATE_CONTACTS, idList: uuidv4() }])
      );
    }

    const newContacts = customer.contacts.filter(
      (contact) => contact.idList !== idList
    );

    dispatch(SET_DATA_CONTACTS(newContacts));
    handleAfertEditOrRemove(newContacts);
  };

  return (
    <C.ContainerGeneral>
      <C.AddMoreContacts onClick={addMoreContacts}>
        <C.IconPlus className="addMoreHover" size={11} />

        <C.Span className="addMoreHover">Adicionar mais</C.Span>
      </C.AddMoreContacts>

      <C.ContentCard>
        {customer.contacts.map((contact, index) => (
          <C.ContentItems key={contact.idList || index}>
            <C.Item className="fistItem">
              <SelectBox
                textLabel={"Tipo Contato"}
                textOption={"text"}
                principalKey={"value"}
                blockedWriting={true}
                items={type_contacts}
                value={contact.tipoContato}
                selectItem={(item) => handleContacts(item, index)}
              />
            </C.Item>

            {selectedContacts[index]?.email && (
              <C.Item style={{ width: "350px" }}>
                <InputLabel
                  name={"email"}
                  textLabel={"E-mail"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.email}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.celular && (
              <C.Item style={{ width: "250px" }}>
                <InputPhone
                  name={"celular"}
                  textLabel={"Celular"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.celular}
                  isCellPhone
                />
              </C.Item>
            )}

            {selectedContacts[index]?.operadora && (
              <C.Item style={{ width: "200px" }}>
                <SelectBox
                  textOption={"text"}
                  principalKey={"value"}
                  blockedWriting={true}
                  textLabel={"Operadora"}
                  items={operatings}
                  selectItem={(item) => handleChange(item, index, true)}
                  value={contact.operadora}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.comercial && (
              <C.Item>
                <InputPhone
                  name={"telefone_comercial"}
                  textLabel={"Telefone comercial"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.telefone_comercial}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.complemento && (
              <C.Item style={{ width: "250px" }}>
                <InputLabel
                  name={"complemento"}
                  textLabel={"Complemento"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.complemento}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.observacao && (
              <C.Item style={{ width: "48%" }}>
                <InputLabel
                  name={"observacao"}
                  textLabel={"Observação"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.observacao}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.residencial && (
              <C.Item>
                <InputPhone
                  name={"telefone_residencial"}
                  textLabel={"Telefone residencial"}
                  handleChange={(event) => handleChange(event, index)}
                  value={contact.telefone_residencial}
                />
              </C.Item>
            )}

            {selectedContacts[index]?.whatsapp && (
              <C.Item
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Switch
                  name={"whatsapp"}
                  displayLabel={true}
                  textLabel={"É WhatsApp ?"}
                  textChecked="Sim"
                  textUnChecked="Não"
                  backgroundColor={"#0ad4e0"}
                  handleChange={(event) =>
                    handleChangeWithWhatsapp(event, index)
                  }
                  isChecked={contact.whatsapp}
                />
              </C.Item>
            )}

            <C.ContentIconDelete>
              <C.IconDelete
                onClick={() => removeContacts(contact.idList, index)}
                color="red"
                cursor={"pointer"}
              />
            </C.ContentIconDelete>
          </C.ContentItems>
        ))}
      </C.ContentCard>
    </C.ContainerGeneral>
  );
}
