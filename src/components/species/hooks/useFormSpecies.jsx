import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA_SPECIES } from "../store/reducers";

import { removeReference } from "../../../utils/removeReference";
import { INITIAL_STATE_SPECIES } from "../initialStates";

export function UseFormSpecies() {
  const { species } = useSelector((state) => state.speciesReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(SET_DATA_SPECIES({ ...species, nome: e.target.value }));
  };

  const clearSpecie = () => {
    dispatch(SET_DATA_SPECIES(removeReference(INITIAL_STATE_SPECIES)));
  };

  useEffect(() => {
    return () => {
      clearSpecie();
    };
  }, []);

  return { handleChange, species, clearSpecie};
}
