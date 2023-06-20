import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import Brand from "../../common/brand/Brand";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <Brand />
      </div>
      <div>
        <ul>
          <li>
            <Button size="small" color="inherit" variant="text">
              Todas
            </Button>
          </li>
          <li>
            <Button size="small" color="inherit" variant="text">
              Carne
            </Button>
          </li>
          <li>
            <Button size="small" color="inherit" variant="text">
              Pollo
            </Button>
          </li>
          <li>
            <Button size="small" color="inherit" variant="text">
              Vegan
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
