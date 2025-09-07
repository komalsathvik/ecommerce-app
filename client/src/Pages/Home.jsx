// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="text-white text-center py-5 mb-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Products Website</h1>
          <p className="lead mt-3">
            Discover Electronics, Books, and Groceries – everything you need in
            one place at the best prices.
          </p>
          <Link to="/listings" className="btn btn-primary btn-lg mt-3">
            Shop Now 🛒
          </Link>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="container mb-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row g-4">
          {/* Electronics */}
          <div className="col-12 col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Electronics"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
                <p className="text-muted">Laptops, mobiles, and more.</p>
                <Link
                  to="/category/Electronics"
                  className="btn btn-outline-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Books */}
          <div className="col-12 col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Books"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Books</h5>
                <p className="text-muted">Expand your knowledge anytime.</p>
                <Link to="/category/Books" className="btn btn-outline-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Groceries */}
          <div className="col-12 col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="Groceries"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Groceries</h5>
                <p className="text-muted">Fresh and organic daily needs.</p>
                <Link
                  to="/category/Groceries"
                  className="btn btn-outline-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">
            Don’t miss out on our exclusive deals!
          </h3>
          <p className="text-muted mb-4">
            Shop your favorite products across categories and get them delivered
            to your doorstep.
          </p>
          <Link to="/listings" className="btn btn-success btn-lg">
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
