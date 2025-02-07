import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import ServiceSpecie from "../services";
import { ValidateSpecie } from "../validators";

export function UseSpecies(getValue, specieIsSaved, findAll, clear) {
  const { species } = useSelector((state) => state.speciesReducer);
  const refSpecie = {
    nome: useRef(""),
  };

  const save = async () => {
    try {
      const isNotValid = ValidateSpecie(species);

      if (isNotValid && Object.keys(isNotValid).length) {
        refSpecie[isNotValid.keyError].current.required = true;
        refSpecie[isNotValid.keyError].current.focus();

        return;
      }

      const id = await ServiceSpecie.save(species);
      handleOutsideFunctions(id);
      findAll();
      clear()

      toast.success("Nova espécie registrada 🚀", {
        position: "top-right",
      });
    } catch (error) {
      toast.info(
        `${error.response.data.erros}` ||
          "Opa, ocorreu um problema ao registrar essa espécie 🤯",
        {
          position: "top-right",
        }
      );
    }
  };

  const update = async () => {
    try {
      const isNotValid = ValidateSpecie(species);

      if (isNotValid && Object.keys(isNotValid).length) {
        refSpecie[isNotValid.keyError].current.required = true;
        refSpecie[isNotValid.keyError].current.focus();

        return;
      }

      await ServiceSpecie.update(species, species.id);
      findAll();
      clear()

      toast.success("Espécie Atualizada 🚀", {
        position: "top-right",
      });
    } catch (error) {
      toast.info(
        `${error.response.data.erros}` ||
          "Opa, ocorreu um problema ao atualizar essa espécie 🤯",
        {
          position: "top-right",
        }
      );
    }
  };

  const handleSaveOrUpdate = async () => {
    if(species.id) {
      return update()
    }

    return save()
  }

  const fillSelectBox = async () => {
    return await ServiceSpecie.fillSelectBox();
  };

  const handleOutsideFunctions = (id) => {
    if (specieIsSaved) {
      specieIsSaved();
    }

    if (getValue) {
      getValue(id);
    }
  };

  return {
    handleSaveOrUpdate,
    update,
    fillSelectBox,
    refSpecie,
  };
}
