import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_DATA_SPECIES } from "../store/reducers";

import ServiceSpecies from "../services";
import { headersTable } from "../common";

import { toast } from "react-toastify";

export function UseSearchSpecies() {
  const [dataSearch, setDataSearch ] = useState({
    headers: headersTable,
    body: [],
  });
  const dispatch = useDispatch()

  const findAll = async () => {
    const result = await ServiceSpecies.fillSelectBox();

    setDataSearch({
      ...dataSearch,
      body: result.map((item) => {
        return {
          id: item.id,
          nome: item.nome,
        };
      }),
    });
  };

  const findById = async (id) => {
    const specie = await ServiceSpecies.findById(id);
    
    dispatch(SET_DATA_SPECIES(specie));
  };

  const deleteById = async (id) => {
    try {
      await ServiceSpecies.deleteById(id);
      findAll()

      toast.success("Espécie removida ✅!", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error)
      toast.error(
        `${
          error?.response?.data?.message ||
          "Opa, ocorreu um problema ao deletar essa espécie 🤯"
        }`,
        {
          position: "top-right",
        }
      );
    }
  };

  const clear = () => {
    dispatch(SET_DATA_SPECIES({id: "", nome: ""}))
  }

  useEffect(() => {
    findAll();
  }, []);

  const tableActions = [
    { text: "Editar", action: (id) => findById(id) },
    { text: "Excluir", action: (id) => deleteById(id) },
  ];

  return {
    tableActions,
    dataSearch,
    findAll,
    clear
  };
}
