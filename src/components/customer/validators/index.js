import Joi from "joi"

const ValidateCustomer = (customer) => {
  const schema = Joi.object({
    nome: Joi.string().max(100).required().messages({
      "string.empty": "(Nome) deve ser informado!",
      "any.required": "(Nome) deve ser informado!"
    }),
    cpfCnpj: Joi.string().max(25).allow(null, '').optional(),
    ie: Joi.string().max(30).allow(null, '').optional(),
    im: Joi.string().max(30).allow(null, '').optional(),
    nif: Joi.string().max(30).allow(null, '').optional(),
    endereco: Joi.string().max(100).allow(null, '').optional(),
    numero: Joi.string().max(10).allow(null, '').optional(),
    complemento: Joi.string().max(100).allow(null, '').optional(),
    bairro: Joi.string().max(100).allow(null, '').optional(),
    cidade: Joi.string().max(100).allow(null, '').optional(),
    uf: Joi.string().max(2).allow(null, '').optional(),
    cep: Joi.string().max(15).allow(null, '').optional(),
    telefone: Joi.string().max(20).allow(null, '').optional(),
    celular: Joi.string().max(20).allow(null, '').optional(),
    email: Joi.string().max(100).allow(null, '').optional(),
    datanascimento: Joi.date().allow(null, '').optional().allow(null, '').optional(),
    observacao: Joi.string().max(100).allow(null, '').optional(),
    consumidor_final: Joi.number().allow(null, '').optional(),
    contribuinte: Joi.number().allow(null, '').optional()
  })

  const { error } = schema.validate(customer, {
    allowUnknown: true,
  })

  if (error?.details[0]?.message || error?.details[0]?.path[0]) {
    return {
      message: error?.details[0]?.message,
      keyError: error?.details[0]?.path[0]
    }
  }
}

export { ValidateCustomer }