import React, {Fragment} from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Shop />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
