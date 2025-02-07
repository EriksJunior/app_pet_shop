import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_CONTACTS } from "../../customer/store/reducers";

import {
  INITIAL_STATE_TYPE_CONTACTS,
  INITIAL_STATE_CONTACTS,
} from "../initialState";
import { HandleContacts } from "../utils/handleContacts";

export function useDiffContacts() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.customer);
  const [selectedContacts, setSelectedContacts] = useState([
    INITIAL_STATE_TYPE_CONTACTS,
  ]);

  const addNewLine = () => {
    const result = HandleContacts("email");
    setSelectedContacts([...selectedContacts, result]);
  };

  const addMoreContacts = () => {
    const newInitialState = { ...INITIAL_STATE_CONTACTS, idList: uuidv4() };
    dispatch(SET_DATA_CONTACTS([...customer.contacts, newInitialState]));
    addNewLine();
  };

  const handleContacts = (selectedTypeContact, index) => {
    const result = HandleContacts(selectedTypeContact);
    setSelectedContacts(
      selectedContacts.map((item, i) => {
        if (i === index) {
          return result;
        }

        return item;
      })
    );

    dispatch(
      SET_DATA_CONTACTS(
        customer.contacts.map((contact, i) => {
          if (i === index) {
            return {
              ...contact,
              tipoContato: selectedTypeContact,
            };
          }

          return contact;
        })
      )
    );
  }

  const handleAfertEditOrRemove = (contacts) => {
    const inputsContactsEnables = [];
    contacts.forEach((contact) => {
      const result = HandleContacts(contact.tipoContato);
      inputsContactsEnables.push(result);
    });

    setSelectedContacts(inputsContactsEnables);
  };

  useEffect(() => {
    if (customer.id) {
      handleAfertEditOrRemove(customer.contacts);
    } else {
      handleContacts("email", 0);
    }
  }, []);

  return { handleContacts, selectedContacts, addMoreContacts, handleAfertEditOrRemove };
}
