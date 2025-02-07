import { useState, useEffect, useRef } from "react";

export function UseInfiniteScroll(
  selectItem,
  actionWhenWriting,
  loadingNewItems,
  principalKey,
  textOption
) {
  const [valueSelected, setValueSelected] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(2);
  const inputValue = useRef("");
  const heightElement = useRef("");

  const handleChange = (item) => {
    setValueSelected(item[textOption]);

    if (selectItem) {
      selectItem(item[principalKey]);
    }
  };

  const loadingMoreItems = async () => {
    if (loadingNewItems) {
      const result = await loadingNewItems(inputValue.current, "nome", page);

      if (!result || !result.length) return;
      setPage((prevPage) => prevPage + 1);

      setItems((prevState) => [...prevState, ...result]);
    }
  };

  const loadingItemsOnFocus = async () => {
    setPage(2);
    setItems([]);

    if (loadingNewItems) {
      const result = await loadingNewItems(inputValue.current, "nome", 1);
      setItems((prevState) => [...prevState, ...result]);
    }
  };

  const loadingItemsWithDebounce = async (q, type = "nome", page = 1) => {
    if (heightElement.current) heightElement.current.scrollTop = 0;
    const result = await loadingNewItems(q, type, page);

    setItems(result);
    setPage(2);
  };

  const handleScroll = () => {
    const item = heightElement.current;
    const totalScroll = item.scrollTop + item.clientHeight;

    if (totalScroll === item.scrollHeight) {
      loadingMoreItems();
    }
  };

  const handleActionWhenWriting = () => {
    if (actionWhenWriting) {
      actionWhenWriting();
      if (selectItem) {
        selectItem("");
      }
    }
  };

  // TODO - problema com mudanças da page, ao buscar todos os items usando o scroll, sair do focus do input e voltar, esta sendo realizado 2 chamadas
  useEffect(() => {
    const ulHeight = heightElement.current;
    ulHeight.addEventListener("scroll", handleScroll);

    return () => {
      ulHeight.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return {
    valueSelected,
    setValueSelected,
    inputValue,
    selectItem,
    handleChange,
    heightElement,
    items,
    loadingMoreItems,
    loadingItemsOnFocus,
    loadingItemsWithDebounce,
    handleActionWhenWriting,
  };
}
