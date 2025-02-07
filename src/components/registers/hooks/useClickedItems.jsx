import { useState } from "react";

export function useClickedItems() {
  const [bigBoxIsOpen, setBigBoxIsOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState({
    lastItemClicked: "",
    textItemClicked: "",
  });
  const [registerEnable, setRegisterEnable] = useState({
    customer: false,
    pet: false,
    product: false,
  });
  const [tableEnable, setTableEnable] = useState({
    customer: true,
    pet: false,
    product: false,
  });

  const openAndCloseBigBox = (itemClicked) => {
    const stateEnableRegister = {
      customer: false,
      pet: false,
      product: false,
      [itemClicked]: true,
    };

    setRegisterEnable(stateEnableRegister);
    setBigBoxIsOpen((state) => !state);
  };

  const handle = (itemClicked, text) => {
    openAndCloseBigBox(itemClicked);

    const items = {
      lastItemClicked: itemClicked,
      textItemClicked: text,
    };
    

    getItemClicked(items);
  };

  const getItemClicked = (items) => {
    setItemClicked(items);
  };

  return {
    handle,
    bigBoxIsOpen,
    itemClicked,
    registerEnable,
    tableEnable,
    setTableEnable,
    openAndCloseBigBox
  };
}
