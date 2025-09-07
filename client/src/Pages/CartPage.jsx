// src/Pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-5 pt-4">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">Your cart is empty.</p>
          <Link to="/listings" className="btn btn-primary">
            Browse Listings
          </Link>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item._id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="fw-bold">₹{item.price}</p>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total + clear */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ₹{total}</h4>
            <button className="btn btn-warning" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
