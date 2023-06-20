import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";

function App() {
  const [saludo, setSaludo] = useState("¡¡Bienvenido a Burger Manía!!");

  const cambiarSaludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };

  return (
    <div>
      <Navbar />
      <ItemList saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
