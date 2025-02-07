const customerHeadersTable = [
  {
    text: "Nome",
    key: "nome",
  },
  {
    text: "CPF / CNPJ",
    key: "cpfCnpj",
  },
  {
    text: "Data Nascimento",
    key: "dataNascimento",
  },
  {
    text: "Observação",
    key: "observacao",
  },
]

const defaultFilterOptions = [
  { text: "Nome", value: "nome", isActive: true },
  { text: "Nome Pet", value: "nomePet", isActive: false },
  { text: "CPF/CNPJ", value: "cpfCnpj", isActive: false }
]

const isActiveOptions = [
  { text: "Ativo", value: true },
  { text: "Inativo", value: false }
]

export { customerHeadersTable, defaultFilterOptions, isActiveOptions }