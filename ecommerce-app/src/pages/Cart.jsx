import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4">
        <h4>Your cart is empty</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Your Cart</h4>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border-bottom py-3"
        >
          <div>
            <h6 className="mb-1">{item.title}</h6>
            <small className="text-muted">
              ₹ {item.price} × {item.quantity}
            </small>
          </div>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-4">
        <h5>Total: $ {total}</h5>
        <Link to="/checkout" className="btn btn-success mt-3">
          Proceed to Checkout
        </Link>

        <button className="btn btn-dark mt-2" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
