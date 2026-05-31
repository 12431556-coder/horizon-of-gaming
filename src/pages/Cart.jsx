import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // New state for phone and location
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("$", "")) * item.quantity;
  }, 0);

  function handleCheckout() {
    if (cartItems.length === 0) {
      alert("⚠️ No items in cart. Please select products before checkout!");
      return;
    }
    if (!phone || !location) {
      alert("⚠️ Please enter your phone number and location before checkout!");
      return;
    }

    alert(`✅ Order placed successfully!\nPhone: ${phone}\nLocation: ${location}`);
    setCartItems([]); // clear cart
    setPhone("");
    setLocation("");
    navigate("/checkout");
  }

  function increaseQuantity(name) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(name) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(name) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items yet — start shopping!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} — {item.price} × {item.quantity} = $
              {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
              <div className="cart-item-buttons">
                <button className="btn" onClick={() => decreaseQuantity(item.name)}>-</button>
                <button className="btn" onClick={() => increaseQuantity(item.name)}>+</button>
                <button className="btn remove-btn" onClick={() => removeItem(item.name)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>Total: ${total.toFixed(2)}</h2>

      {/* New input fields */}
      <div className="checkout-info">
  <input
    type="text"
    placeholder="Enter phone number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
</div>


      <div className="checkout">
        <button className="btn checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
