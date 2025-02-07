import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE_PET } from "../../initialState"

export const PetReducer = createSlice({
  name: "pet",
  initialState: {
    pet: { ...INITIAL_STATE_PET },
    idCustomerSelected: "",
    searchedPets: { headers: [], body: [] },
    customerPets: [],
    formEnabled: {
      pet: true,
      raca: false,
    },
  },
  reducers: {
    SET_DATA_PET: (state, action) => {
      state.pet = action.payload
    },
    SET_IDCUSTOMER_SELECTED: (state, action) => {
      state.idCustomerSelected = action.payload
    },
    SET_DATA_SEARCHED_PETS: (state, action) => {
      state.searchedPets = action.payload
    },
    SET_DATA_CUSTOMER_PETS: (state, action) => {
      state.customerPets = action.payload
    },
    SET_FORM_ENABLED: (state, { payload }) => {
      state.formEnabled = {
        pet: false,
        raca: false,
        [payload]: true,
      }
    }
  }
})

export const { SET_DATA_PET, SET_IDCUSTOMER_SELECTED, SET_DATA_SEARCHED_PETS, SET_DATA_CUSTOMER_PETS, SET_FORM_ENABLED } = PetReducer.actions
export default PetReducer.reducer