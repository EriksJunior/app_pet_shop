import { AppRoutes } from "./routes";
import { ThemeProvider } from "./context/theme";

import { Sidebar } from "./components/sidebar";
import { GlobalStyle } from "./styles";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Sidebar>
        <AppRoutes />
      </Sidebar>
    </ThemeProvider>
  );
}

export default App;
