import React, { useEffect, useState } from "react";
import axios from "axios";

function Listings() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/listings");
        if (data.success) setProducts(data.products);
        else setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center">All Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
            <div className="card h-100 shadow-sm listing-card d-flex flex-column">
              <div className="card-img-container">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">
                  {product.description.substring(0, 80)}...
                </p>
                <p className="fw-bold">₹{product.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
