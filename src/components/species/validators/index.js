import Joi from "joi"

const ValidateSpecie = (specie) => {
  const schema = Joi.object({
    nome: Joi.string().max(100).required().messages({
      "string.empty": "(Nome) deve ser informado!",
      "any.required": "(Nome) deve ser informado!"
    }),
  })

  const { error } = schema.validate(specie, {
    allowUnknown: true,
  })

  if (error?.details[0]?.message || error?.details[0]?.path[0]) {
    return {
      message: error?.details[0]?.message,
      keyError: error?.details[0]?.path[0]
    }
  }
}

export { ValidateSpecie }