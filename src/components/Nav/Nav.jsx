import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">
             Carrito {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};