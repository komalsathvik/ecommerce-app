import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/listings/category/${name}`
        );
        if (data.success) setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchCategoryProducts();
  }, [name]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Category: {name}</h2>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
