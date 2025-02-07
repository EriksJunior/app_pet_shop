import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_CONTACTS } from "../../customer/store/reducers";

export function useHandleContacts() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.customer);

  function handleChange(e, index, isOperator = false) {
    dispatch(
      SET_DATA_CONTACTS(
        customer.contacts.map((contact, i) => {
          if (i === index) {
            return {
              ...contact,
              [!isOperator ? e.target.name : "operadora"]: !isOperator
                ? e.target.value
                : e,
            };
          }

          return contact;
        })
      )
    );
  }

  function handleChangeWithWhatsapp(e, index) {
    dispatch(
      SET_DATA_CONTACTS(
        customer.contacts.map((contact, i) => {
          if (i === index) {
            return {
              ...contact,
              whatsapp: e.target.checked
            };
          }

          return contact;
        })
      )
    );
  }

  return { handleChange, handleChangeWithWhatsapp };
}
