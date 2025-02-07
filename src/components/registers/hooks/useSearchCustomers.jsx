import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  SET_DATA_SEARCHED_CUSTOMERS,
  SET_DATA_CUSTOMER,
} from "../../customer/store/reducers";

import ServiceCustomer from "../../customer/services";
import { customerHeadersTable } from "../common/customer";
import { INITIAL_STATE_CONTACTS } from "../../contacts/initialState"
import { toast } from "react-toastify";

export function useSearchCustomers(handleBigBox) {
  const dispatch = useDispatch();

  const [filterOptions, setFilterOptions] = useState({
    text: "",
    type: "nome",
    page: 1,
    isActive: true,
    endDate: "",
    startDate: "",
    situation: "",
  });

  useEffect(() => {
    searchCustomers(filterOptions);
  }, []);

  useEffect(() => {
    searchCustomers(filterOptions);
  }, [filterOptions.page]);

  const searchCustomers = async (item = filterOptions) => {
    const result = await ServiceCustomer.search(
      item.text,
      item.type,
      item.isActive,
      item.page
    );

    dispatch(
      SET_DATA_SEARCHED_CUSTOMERS({
        headers: customerHeadersTable,
        body: result.map((item) => {
          return {
            id: item.id,
            nome: item.nome,
            cpfCnpj: item.cpfCnpj,
            dataNascimento: item.dataNascimento,
            observacao: item.observacao,
          };
        }),
      })
    );
  };

  const findById = async (id) => {
    const customer = await ServiceCustomer.findById(id);
    if (customer && customer.contacts.length) {
      customer.contacts = customer.contacts.map((contact) => {
        return {
          ...contact,
          idList: uuidv4(),
        };
      });
    } else {
      customer.contacts = [{ ...INITIAL_STATE_CONTACTS, idList: uuidv4() }];
    }

    dispatch(SET_DATA_CUSTOMER(customer));
    handleBigBox("customer", "Cliente");
  };

  const deleteById = async (id) => {
    try {
      await ServiceCustomer.deleteById(id);
      searchCustomers(filterOptions);

      toast.success("Cliente removido ✅!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(
        `${
          error?.response?.data?.message ||
          "Opa, ocorreu um problema ao registrar esse cliente 🤯"
        }`,
        {
          position: "top-right",
        }
      );
    }
  };

  const customerTableActions = [
    { text: "Editar", action: (id) => findById(id) },
    { text: "Excluir", action: (id) => deleteById(id) },
    { text: "Ver Pets", action: (id) => console.log("Mostrando Pets", id) },
    { text: "Gerar Venda", action: (id) => console.log("Gerando Venda", id) },
  ];

  return {
    customerTableActions,
    setFilterOptions,
    searchCustomers,
    filterOptions,
  };
}
