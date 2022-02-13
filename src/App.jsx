import { ContextProvider } from "./context";
import Header from "./layouts/Header";
import Shop from "./layouts/Shop";





function App() {
  return (
    <>
      <Header/>
      <ContextProvider>
        <Shop/>
      </ContextProvider>
    </>
  );
}

export default App;
