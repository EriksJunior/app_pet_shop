import { Registers } from "../../components/registers";
import { Provider } from "react-redux";
import store from "../../components/registers/store";

export function PageRegisters() {
  return (
    <Provider store={store}>
      <Registers />
    </Provider>
  );
}
