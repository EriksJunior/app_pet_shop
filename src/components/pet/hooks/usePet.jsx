import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SET_DATA_PET,
  SET_DATA_CUSTOMER_PETS,
  SET_FORM_ENABLED,
} from "../store/reducers";
import { useFormPet } from "./useFormPet";
import { UseBreed } from "../../breed/hooks/useBreed";
import { UseFormBreed } from "../../breed/hooks/useFormBreed";
import { UseFormSpecies } from "../../species/hooks/useFormSpecies";

import ServicePet from "../services";
import ServiceCustomer from "../../customer/services";
import { ValidatePet } from "../validators";

import { toast } from "react-toastify";

export function UsePet(toggleCanvas) {
  const [detailsPetEnable, setDetailsPetEnable] = useState(false);
  const [detailsPet, setDetailsPet] = useState({});

  const dispatch = useDispatch();
  const { pet, idCustomerSelected, customerPets } = useSelector(
    (state) => state.petReducer
  );

  const { clearButNotIdCustomerSelected } = useFormPet();
  const { findBreedFromSelectBox, breedsToSelectBox } = UseBreed();
  const { clearBreed } = UseFormBreed();
  const { clearSpecie } = UseFormSpecies();

  const refPet = {
    idCliente: useRef(""),
    idRaca: useRef(""),
    nome: useRef(""),
    genero: useRef(""),
    dataNascimento: useRef(""),
    esterilizacao: useRef(""),
    status: useRef(""),
  };

  const save = async () => {
    try {
      const isNotValid = ValidatePet(pet);
      if (isNotValid && Object.keys(isNotValid).length) {
        refPet[isNotValid.keyError].current.required = true;
        refPet[isNotValid.keyError].current.focus();

        return;
      }

      await ServicePet.save(pet);
      findPetsByCustomer(pet.idCliente);

      handleClear();

      toast.success("Nova raça registrada 🚀", {
        position: "top-right",
      });
    } catch (error) {
      toast.info(
        `${error?.response?.data?.erros}` ||
          "Opa, ocorreu um problema ao registrar essa raça 🤯",
        {
          position: "top-right",
        }
      );
    }
  };

  const handleClear = () => {
    clearButNotIdCustomerSelected();
    clearBreed();
    clearSpecie();
    dispatch(SET_FORM_ENABLED("pet"));
  };

  const findCustomer = async (text, type, page) => {
    return await ServiceCustomer.fillCombobox(text, type, page);
  };

  const findPetsByCustomer = async (customerId) => {
    try {
      const pets = await ServicePet.findByCustomerId(customerId);
      dispatch(SET_DATA_CUSTOMER_PETS(pets));
    } catch (error) {
      toast.info(
        `${error?.response?.data?.erros}` ||
          "Opa, ocorreu um problema ao registrar essa raça 🤯",
        {
          position: "top-right",
        }
      );
    }
  };

  const findPetById = async (id) => {
    const pet = await ServicePet.findById(id);
    setDetailsPet(pet);
  };

  const clearCustomerPets = () => {
    if (customerPets && customerPets.length)
      dispatch(SET_DATA_CUSTOMER_PETS([]));
  };

  const handleValidateNewPet = () => {
    if (!idCustomerSelected) {
      refPet.idCliente.current.required = true;
      refPet.idCliente.current.focus();
    } else {
      dispatch(SET_DATA_PET({ ...pet, idCliente: idCustomerSelected }));
      toggleCanvas();
    }
  };

  const toggleDetailsPet = () => {
    setDetailsPetEnable((state) => !state);
  };

  const clearPetDetails = () => {
    setDetailsPet({})
  }

  const handleToggleDetailsAndClear = () => {
    toggleDetailsPet()
    clearPetDetails()
  }

  const handleShowPet = (id) => {
    findPetById(id);
    toggleDetailsPet();
  };

  useEffect(() => {
    findBreedFromSelectBox();
  }, []);

  return {
    findPetsByCustomer,
    clearCustomerPets,
    findCustomer,
    handleClear,
    breedsToSelectBox,
    save,
    refPet,
    toggleCanvas,
    findBreedFromSelectBox,
    handleValidateNewPet,
    detailsPetEnable,
    handleShowPet,
    detailsPet,
    handleToggleDetailsAndClear,
    toggleDetailsPet
  };
}
