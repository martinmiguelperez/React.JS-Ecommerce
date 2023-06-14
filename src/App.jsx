import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const funcionSaludar = () => {
    alert("Hola mundo");
  };

  return (
    <div>
      <Navbar />
      <h1>Hola Mundo</h1>
      <button onClick={funcionSaludar}>Saludar</button>
      <Footer />
    </div>
  );
}

export default App;
