import "./Item.css";
import { useCart } from "../../context/CartContext";

export const Item = ({ id, name, description, price, image, children }) => {
  const { addToCart } = useCart();

  const producto = { id, name, description, price, image };

  const handleAddToCart = () => {
    addToCart(producto, 1);
    alert(`Agregaste ${name} al carrito.`);
  };

  return (
    <article className="card">
      <img src={image} alt={`foto de ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </article>
  );
};