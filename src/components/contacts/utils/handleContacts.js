export function HandleContacts(selectedTypeContact) {
  const contactTypeMappings = {
    ["email"]: {
      email: true,
      observacao: true,
      celular: false,
      comercial: false,
      complemento: false,
      outros: false,
      residencial: false,
      operadora: false,
      whatsapp: false,
    },
    ["celular"]: {
      email: false,
      observacao: true,
      celular: true,
      comercial: false,
      complemento: false,
      outros: false,
      residencial: false,
      operadora: true,
      whatsapp: true,
    },
    ["comercial"]: {
      email: false,
      observacao: true,
      celular: false,
      comercial: true,
      complemento: true,
      outros: false,
      residencial: false,
      operadora: false,
      whatsapp: false,
    },
    ["outros"]: {
      email: false,
      observacao: true,
      celular: false,
      comercial: false,
      complemento: true,
      outros: true,
      residencial: false,
      operadora: false,
      whatsapp: false,
    },
    ["residencial"]: {
      email: false,
      observacao: true,
      celular: false,
      comercial: false,
      complemento: true,
      outros: false,
      residencial: true,
      operadora: false,
      whatsapp: false,
    },
  }

  if (selectedTypeContact in contactTypeMappings) {
    return contactTypeMappings[selectedTypeContact]
  }
}