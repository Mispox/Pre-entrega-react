// src/componentes/Cart/Cart.jsx
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
const { cart, setCart, clearCart, getCartTotal, addToCart } = useCart();

 const handleRestar = (item) => {
  if (item.quantity === 1) {
    setCart(cart.filter(p => p.id !== item.id));
  } else {
    setCart(cart.map(p =>
      p.id === item.id
        ? { ...p, quantity: p.quantity - 1 }
        : p
    ));
  }
};
  if (cart.length === 0) {
    return (
      <div className="cart-container cart-empty">
        <h1>Tu carrito está vacío </h1>
        <p>Todavía no agregaste ningún producto.</p>
        <Link to="/" className="btn-home">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
          <div className="cart-item-controls">
            <button onClick={() => handleRestar(item)}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item, 1)}>+</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total: ${getCartTotal()}</strong>
      </div>

      <button className="btn-vaciar" onClick={clearCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;