import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4">
        <h4>No items to checkout</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Checkout</h3>

      <div className="row">
        {/* Order Summary */}
        <div className="col-md-8">
          <h5 className="mb-3">Order Summary</h5>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div>
                <strong>{item.title}</strong>
                <div className="text-muted small">
                  Qty: {item.quantity}
                </div>
              </div>

              <div>
                ₹ {item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Price Box */}
        <div className="col-md-4">
          <div className="border rounded p-3">
            <h5>Total</h5>
            <h4 className="mb-3 text-success">
              ₹ {totalAmount}
            </h4>

            <button
              className="btn btn-dark w-100"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
