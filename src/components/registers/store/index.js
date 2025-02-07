import {configureStore} from "@reduxjs/toolkit"
import CustomerReducer  from "../../customer/store/reducers"
import PetReducer from "../../pet/store/reducers"
import SpeciesReducer from "../../species/store/reducers"
import BreedReducer from "../../breed/store/reducers"

export default configureStore({
  reducer: {
    customerReducer: CustomerReducer,
    petReducer: PetReducer,
    speciesReducer: SpeciesReducer,
    breedReducer: BreedReducer
  }
})
