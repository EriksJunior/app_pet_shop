import { v4 as uuidv4 } from "uuid";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_CUSTOMER } from "../store/reducers";
import {
  INITIAL_STATE_CUSTOMER,
} from "../initialState";
import { INITIAL_STATE_CONTACTS } from "../../contacts/initialState";

export function useFormCustomer() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.customer);

  const handleChange = (e) => {
    dispatch(
      SET_DATA_CUSTOMER({ ...customer, [e.target.name]: e.target.value })
    );
  };

  const clear = useCallback(() => {
    dispatch(
      SET_DATA_CUSTOMER({
        ...INITIAL_STATE_CUSTOMER,
        contacts: [{ ...INITIAL_STATE_CONTACTS, idList: uuidv4() }],
      })
    );
  }, [dispatch]);

  
  useEffect(() => {
    return () => {
      clear()
    }
  }, [])

  return { handleChange };
}
