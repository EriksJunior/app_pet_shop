import { useSelector } from "react-redux";
import { useClickedItems } from "./hooks/useClickedItems";
import { useSearchCustomers } from "./hooks/useSearchCustomers";

import * as R from "./styles";
import { Customer } from "../customer";
import { Pet } from "../pet";
import { BigBox } from "../UI/BigBox";
import { Table } from "../UI/Table";
import { SearchBar } from "../UI/SearchBar";
import { RegisterButton } from "../UI/registerButton";

import { defaultFilterOptions, isActiveOptions } from "./common/customer";
import { UseDebounce } from "../../utils/useDebounce";

import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";

export function Registers() {
  const searchedCustomers = useSelector(
    (state) => state.customerReducer.searchedCustomers
  );

  const { handle, bigBoxIsOpen, itemClicked, registerEnable, tableEnable } =
    useClickedItems();

  const {
    customerTableActions,
    searchCustomers,
    filterOptions,
    setFilterOptions,
  } = useSearchCustomers(handle);

  const debouncedChanged = UseDebounce(searchCustomers);

  const handleChange = async (item) => {
    setFilterOptions(item);
    debouncedChanged(item);
  };

  const previousPage = () => {
    if (filterOptions.page === 1) return;
    setFilterOptions({ ...filterOptions, page: filterOptions.page - 1 });
  };

  const nextPage = () => {
    if (searchedCustomers?.body && searchedCustomers?.body.length < 9) {
      return;
    }

    setFilterOptions({ ...filterOptions, page: filterOptions.page + 1 });
  };

  return (
    <R.Card>
      <R.ContentBtnRegisters>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <R.BtnRegisters>
            <RegisterButton
              width={"auto"}
              icon={<BsFillPersonPlusFill size={20} />}
              click={() => handle("customer", "Cliente")}
            />
          </R.BtnRegisters>

          <R.BtnRegisters>
            <RegisterButton
              width={"auto"}
              icon={<MdOutlinePets size={20} />}
              click={() => handle("pet", "Pet")}
            />
          </R.BtnRegisters>

          <R.BtnRegisters>
            <RegisterButton
              width={"auto"}
              icon={<FaBoxArchive size={20} />}
              click={() => handle("product", "Produto")}
            />
          </R.BtnRegisters>
        </div>
      </R.ContentBtnRegisters>

      <div
        style={{
          width: "100%",
          marginTop: "30px",
          height: "calc(100% - 70px - 5rem)",
        }}
      >
        {tableEnable.customer && (
          <Table
            items={searchedCustomers}
            dropDownItems={customerTableActions}
            nextPage={nextPage}
            previousPage={previousPage}
            page={filterOptions.page}
            valueToJoinHtmlFor="customers"
            enablePaginate
          >
            <SearchBar
              getValues={handleChange}
              placeholder={"Buscar por clientes"}
              filterOptions={defaultFilterOptions}
              isActiveOptions={isActiveOptions}
              isActiveOptionsIsEnable
              defaultFilter={filterOptions.type}
            />
          </Table>
        )}
      </div>

      <BigBox
        titleHeader={
          registerEnable.pet
            ? "Veja informações de Pet's por cliente"
            : `Preencha um novo cadastro de ${itemClicked.textItemClicked}`
        }
        open={bigBoxIsOpen}
        close={() =>
          handle(itemClicked.lastItemClicked, itemClicked.textItemClicked)
        }
      >
        {bigBoxIsOpen && registerEnable.customer && (
          <Customer
            closeBigBox={() =>
              handle(itemClicked.lastItemClicked, itemClicked.textItemClicked)
            }
            searchCustomers={searchCustomers}
          />
        )}
        {bigBoxIsOpen && registerEnable.pet && <Pet />}
        {bigBoxIsOpen && registerEnable.product && (
          <p>Cadastro de produto aqui</p>
        )}
      </BigBox>
    </R.Card>
  );
}
