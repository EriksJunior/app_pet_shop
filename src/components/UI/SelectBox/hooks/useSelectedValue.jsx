import { useState, useEffect } from "react";

export function useSelectedValue(
  value,
  items,
  selectItem,
  principalKey,
  textOption
) {
  const [valueSelected, setValueSelected] = useState("");

  const handleChange = (item) => {
    setValueSelected(item[textOption]);

    if (selectItem) {
      selectItem(item[principalKey]);
    }
  };

  useEffect(() => {
    const result = items.find((item) => item[principalKey] === value);
    if (result) setValueSelected(result[textOption]);
  }, [value, items, principalKey, textOption]);

  useEffect(() => {
    if (value === "" || value === null) {
      setValueSelected("Selecione...");
      selectItem("");
    }
  }, [value]);

  return { valueSelected, selectItem, handleChange };
}
