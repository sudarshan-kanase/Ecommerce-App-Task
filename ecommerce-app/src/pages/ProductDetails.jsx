import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.log("Error loading product", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Please wait, loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-4">
        <p>Product not found.</p>
      </div>
    );
  }

  return (

    <div className="container mt-4">

      <div className="row">

        
        <div className="col-md-6 mb-4">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="img-fluid rounded border"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />

        </div>



        <div className="col-md-6">

          <h3 className="mb-3">{product.title}</h3>

          <h4 className="text-success mb-3">
            $ {product.price}
          </h4>

          <p className="text-muted">
            {product.description}
          </p>

          <button
            className="btn btn-dark mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>

  
  
);
}

