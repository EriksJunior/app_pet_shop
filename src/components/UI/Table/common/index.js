const defaultActions = [
  { text: 'Default 1', action: (params) => console.log('Ação ao selecionar Default 1', params) },
  { text: 'Default 2', action: (params) => console.log('Ação ao selecionar Default 2', params) },
  { text: 'Default 3', action: (params) => console.log('Ação ao selecionar Default 3', params) },
]

const defaultTable = {
  headers: [
    {
      text: "Default 1",
      key: "default1",
    },
    {
      text: "Default 2",
      key: "default2",
    },
    {
      text: "Default 3",
      key: "default3",
    },
  ],
  body: [
    { default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { default1: "teste 1", default2: "teste 2", default3: "teste 3" },
  ],
}

export { defaultActions, defaultTable }