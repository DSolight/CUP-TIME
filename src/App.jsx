import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
