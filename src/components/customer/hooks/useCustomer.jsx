import { useRef } from "react";
import { useSelector } from "react-redux";

import CustomerService from "../services/index";
import { ValidateCustomer } from "../validators";
import { removeReference } from "../../../utils/removeReference";
import { toast } from "react-toastify";

export function UseCustomer(closeBigBox, searchCustomers) {
  const customer = useSelector((state) => state.customerReducer.customer);
  const refCustomer = {
    nome: useRef(""),
  };

  // TODO - criar update customer
  const save = async () => {
    const isNotValid = ValidateCustomer(customer);
    
    if (isNotValid && Object.keys(isNotValid).length) {
      refCustomer[isNotValid.keyError].current.required = true;
      refCustomer[isNotValid.keyError].current.focus();

      return
    }

    const contacts = handleValidContacts(removeReference(customer.contacts));

    await toast.promise(CustomerService.save({ ...customer, contacts }), {
      pending: "aguarde estamos registrando seu novo cliente 😀",
      success: "Novo cliente registrado 🚀",
      error: "Opa, ocorreu um problema ao registrar esse cliente 🤯",
    });

    searchCustomers();
    closeBigBox();
  };

  const handleValidContacts = (contacts) => {
    const newContacts = contacts.filter((contact) => {
      return Object.keys(contact).some(
        (key) => key !== "idList" && key !== "tipoContato" && key !== "whatsapp" && contact[key] !== ""
      );
    });

    return newContacts;
  };

  return { save, refCustomer };
}
