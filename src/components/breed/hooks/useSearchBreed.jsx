import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_DATA_BREED } from "../store/reducers";

import ServiceBreed from "../services";
import { headersTable } from "../common";
import { toast } from "react-toastify";

export function UseSearchBreed() {
  const [dataSearch, setDataSearch] = useState({
    headers: headersTable,
    body: [],
  });

  const dispatch = useDispatch();

  const findAll = async () => {
    const result = await ServiceBreed.fillSelectBox();

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
    const result = await ServiceBreed.findById(id);

    dispatch(SET_DATA_BREED(result));
  };

  const removeById = async (id) => {
    await ServiceBreed.removeById(id);

    
    toast.success("Espécie removida ✅!", {
      position: "top-right",
    });
    findAll();
  };

  useEffect(() => {
    findAll();
  }, []);

  const tableActions = [
    { text: "Editar", action: (id) => findById(id) },
    { text: "Excluir", action: (id) => removeById(id) },
  ];

  return {
    dataSearch,
    tableActions,
    findAll,
  };
}
