import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { UseSpecies } from "../../species/hooks/useSpecies";
import { toast } from "react-toastify";

import ServiceBreed from "../services";
import { ValidateBreed } from "../validators";

export function UseBreed(clearBreed, getValue, breedIsSaved, findAll) {
  const [speciesToSelectBox, setSpeciesToSelectBox] = useState();
  const [breedsToSelectBox, setBreedsToSelectBox] = useState();
  const [formEnabled, setFormEnabled] = useState({
    raca: true,
    especie: false,
  });

  const { breed } = useSelector((state) => state.breedReducer);
  const { fillSelectBox } = UseSpecies();

  const refBreed = {
    nome: useRef(""),
    idEspecie: useRef(""),
  };

  const save = async () => {
    try {
      const isNotValid = ValidateBreed(breed);
      if (isNotValid && Object.keys(isNotValid).length) {
        refBreed[isNotValid.keyError].current.required = true;
        refBreed[isNotValid.keyError].current.focus();

        return;
      }

      const id = await ServiceBreed.save(breed);
      handleOutsideFunctions(id);
      
      findAll()
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

  const findSpeciesFromSelectBox = async () => {
    const species = await fillSelectBox();
    setSpeciesToSelectBox(species);
  };

  const findBreedFromSelectBox = async () => {
    const breeds = await ServiceBreed.fillSelectBox();
    setBreedsToSelectBox(breeds);
  };

  const handleOutsideFunctions = (id) => {
    if (breedIsSaved) {
      breedIsSaved();
    }

    if (getValue) {
      getValue(id);
    }
  };

  const handleFormEnabled = (key) => {
    setFormEnabled({
      raca: false,
      especie: false,
      [key]: true
    })
  }

  useEffect(() => {
    findSpeciesFromSelectBox();
  }, []);

  return {
    save,
    refBreed,
    breedsToSelectBox,
    findBreedFromSelectBox,
    speciesToSelectBox,
    formEnabled,
    handleFormEnabled,
    findSpeciesFromSelectBox
  };
}
