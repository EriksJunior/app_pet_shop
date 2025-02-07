import Joi from "joi"

const ValidateBreed = (breed) => {
  const schema = Joi.object({
    nome: Joi.string().max(100).required().messages({
      "string.empty": "(Nome) deve ser informado!",
      "any.required": "(Nome) deve ser informado!"
    }),
    idEspecie: Joi.string().max(100).required().messages({
      "string.empty": "(Especie) deve ser selecionada!",
      "any.required": "(Especie) deve ser selecionada!"
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

export { ValidateBreed }