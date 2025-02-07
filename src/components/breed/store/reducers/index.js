import { createSlice } from "@reduxjs/toolkit";

export const BreedReducer = createSlice({
  name: "pet",
  initialState: {
    breed: {
      id: "",
      nome: "",
      idEspecie: ""
    },
  },
  reducers: {
    SET_DATA_BREED: (state, { payload }) => {
      state.breed = payload
    },
  }
})

export const { SET_DATA_BREED } = BreedReducer.actions
export default BreedReducer.reducer