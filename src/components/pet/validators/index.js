import Joi from "joi"
import { E_GENDER, E_STATUS, E_STERILIZATION } from "../enums"

const ValidatePet = (breed) => {
  const schema = Joi.object({
    idCliente: Joi.string().max(100).required().messages({
      "string.empty": "(Cliente) deve ser selecionado!",
      "any.required": "(Cliente) deve ser selecionado!"
    }),
    nome: Joi.string().max(100).required().messages({
      "string.empty": "(Nome) deve ser preenchido!",
      "any.required": "(Nome) deve ser preenchido!"
    }),
    idRaca: Joi.string().max(100).required().messages({
      "string.empty": "(Raça) deve ser selecionada!",
      "any.required": "(Raça) deve ser selecionada!"
    }),
    genero: Joi.string().max(100).valid(E_GENDER.MACHO, E_GENDER.FEMEA).required().messages({
      "string.empty": "(Nome) deve ser selecionado!",
      "any.required": "(Nome) deve ser selecionado!"
    }),
    dataNascimento: Joi.string().max(100).required().messages({
      "string.empty": "(Data Nascimento) deve ser informada!",
      "any.required": "(Data Nascimento) deve ser informada!"
    }),
    esterilizacao: Joi.string().max(100).valid(E_STERILIZATION.CASTRADO, E_STERILIZATION.FERTIL).required().messages({
      "string.empty": "(Esterelizado) deve ser selecionada!",
      "any.required": "(Esterelizado) deve ser selecionada!"
    }),
    status: Joi.string().max(100).valid(E_STATUS.VIVO, E_STATUS.OBITO).required().messages({
      "string.empty": "(Status) deve ser selecionado!",
      "any.required": "(Status) deve ser selecionado!"
    }),
  })

  const { error } = schema.validate(breed, {
    allowUnknown: true,
  })

  if (error?.details[0]?.message || error?.details[0]?.path[0]) {
    return {
      message: error?.details[0]?.message,
      keyError: error?.details[0]?.path[0]
    }
  }
}

export { ValidatePet }