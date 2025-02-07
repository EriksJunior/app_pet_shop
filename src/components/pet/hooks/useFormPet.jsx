import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_PET, SET_IDCUSTOMER_SELECTED, SET_DATA_CUSTOMER_PETS } from "../store/reducers";
import { INITIAL_STATE_PET } from "../initialState";

export function useFormPet() {
  const dispatch = useDispatch();
  const { pet, idCustomerSelected, formEnabled } = useSelector((state) => state.petReducer);

  const handleChange = (e) => {
    if (e.target.name === "pedigree") {
      return dispatch(
        SET_DATA_PET({
          ...pet,
          [e.target.name]: e.target.checked,
          numeroPedigree: "",
          chip: "",
        })
      );
    }

    dispatch(SET_DATA_PET({ ...pet, [e.target.name]: e.target.value }));
  };

  const clear = () => {
    dispatch(
      SET_DATA_PET({
        ...INITIAL_STATE_PET
      })
    );
    dispatch(SET_IDCUSTOMER_SELECTED(""))
    dispatch(SET_DATA_CUSTOMER_PETS([]));
  };

  const clearButNotIdCustomerSelected= () => {
    dispatch(
      SET_DATA_PET({
        ...INITIAL_STATE_PET,
        idCliente: idCustomerSelected
      })
    );
  };

  const handleTitleOffCanvas = () => {
    return formEnabled.pet ? "Registrar Pet" : formEnabled.raca ? "Registrar Raça" : formEnabled.especie ? "Registrar Especie" : "Default Title"
  };

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return { handleChange, clear, clearButNotIdCustomerSelected, handleTitleOffCanvas};
}
