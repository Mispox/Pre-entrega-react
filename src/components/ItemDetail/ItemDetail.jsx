import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ id, name, description, longDescription, price, image }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, description, price, image }, cantidad);
    alert(`Agregaste ${cantidad} unidad/es de "${name}" al carrito.`);
  };

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={image} alt={name} />
      </div>
      <div className="detail-info">
        <h2>{name}</h2>
        <p className="detail-description">{longDescription || description}</p>
        <p className="detail-price">${price.toLocaleString()}</p>

        <div className="detail-quantity">
          <span>CANTIDAD</span>
          <div className="quantity-controls">
            <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>−</button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(c => c + 1)}>+</button>
          </div>
        </div>

        <button className="detail-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};