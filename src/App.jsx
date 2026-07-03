import Create from "./products/Create";
import { ThemeProvider } from "./context/ThemeContext";
import WebLayout from "./layouts/WebLayout";

const App = () => {
  return (
    <ThemeProvider>
      {/* <Create /> */}
      <WebLayout />
    </ThemeProvider>
  );
};
export default App;
