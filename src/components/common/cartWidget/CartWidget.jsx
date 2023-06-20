import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={10} color="secondary">
        <ShoppingCart
          sx={{
            fontSize: "2rem",
            color: "#ffede2",
          }}
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
