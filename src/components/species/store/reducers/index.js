import { createSlice } from "@reduxjs/toolkit";

export const SpeciesReducer = createSlice({
  name: "pet",
  initialState: {
    species: {
      id: "",
      nome: ""
    },
  },
  reducers: {
    SET_DATA_SPECIES: (state, { payload }) => {
      state.species = payload
    },
  }
})

export const { SET_DATA_SPECIES } = SpeciesReducer.actions
export default SpeciesReducer.reducer