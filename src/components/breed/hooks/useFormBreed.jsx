import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_BREED } from "../store/reducers";

import { removeReference } from "../../../utils/removeReference";
import { INITIAL_STATE_BREED } from "../initialStates";

export function UseFormBreed() {
  const { breed } = useSelector((state) => state.breedReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(SET_DATA_BREED({ ...breed, [e.target.name]: e.target.value }));
  };

  const clearBreed = () => {
    dispatch(SET_DATA_BREED(removeReference(INITIAL_STATE_BREED)));
  };

  useEffect(() => {
    return () => {
      clearBreed();
    };
  }, []);

  return { handleChange, breed, clearBreed };
}
