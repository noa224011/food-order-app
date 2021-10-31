import { Fragment } from "react";
import Cart from "./components/Cart/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
