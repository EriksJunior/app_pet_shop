import { v4 as uuidv4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_STATE_CUSTOMER } from "../../initialState"
import {INITIAL_STATE_CONTACTS } from "../../../contacts/initialState"

export const CustomerReducer = createSlice({
  name: "customer",
  initialState: {
    customer: { ...INITIAL_STATE_CUSTOMER, contacts: [{ ...INITIAL_STATE_CONTACTS, idList: uuidv4() }] },
    searchedCustomers: { headers: [], body: [] }
  },
  reducers: {
    SET_DATA_CUSTOMER: (state, action) => {
      state.customer = action.payload
    },
    SET_DATA_SEARCHED_CUSTOMERS: (state, action) => {
      state.searchedCustomers = action.payload
    },
    SET_DATA_CONTACTS: (state, action) => {
      state.customer.contacts = action.payload
    },
  }
})

export const { SET_DATA_CUSTOMER, SET_DATA_SEARCHED_CUSTOMERS, SET_DATA_CONTACTS } = CustomerReducer.actions
export default CustomerReducer.reducer