import Create from "./products/Create";
import { ThemeProvider } from "./context/ThemeContext";
import WebLayout from "./layouts/WebLayout";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {/* <Create /> */}
        <WebLayout />
      </ThemeProvider>
    </AuthProvider>
  );
};
export default App;
