import { Box } from "@mui/material";

const itemList = ({ saludo, cambiarSaludo }) => {
  return (
    <Box sx={{ margin: "30px", textAlign: "center" }}>
      <h2>Hola, {saludo}</h2>
      <button onClick={() => cambiarSaludo("Muchas Gracias")}>Responder</button>
    </Box>
  );
};

export default itemList;
