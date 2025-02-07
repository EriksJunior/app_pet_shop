import { useState } from "react";
import { INITIAL_STATE_SHOW_ITEMS } from "../initialState";

export function UsePetDetails() {
  const [showItems, setShowItems] = useState(INITIAL_STATE_SHOW_ITEMS);

  const handleShowItems = (item) => {
    const payload = {
      ...INITIAL_STATE_SHOW_ITEMS,
      options: false,
      [item]: true,
    };

    setShowItems(payload);
  };

  return { showItems, handleShowItems };
}
