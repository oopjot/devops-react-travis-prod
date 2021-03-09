import { useState } from "react";
import CreatePizza from "./components/CreatePizza";
import IngredientForm from "./components/IngredientForm";
import Ingredients from "./components/Ingredients";
import Pizzas from "./components/Pizzas";

function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "row", margin: "50px"}}>
      <IngredientForm />
      <Ingredients />
      <CreatePizza />
      <Pizzas />
    </div>
  );
};

export default App;
