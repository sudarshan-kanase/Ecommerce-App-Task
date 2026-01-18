import { Link } from "react-router-dom";

export default function ProductCard({ product }) 
{

  return (
    
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.images?.[0]}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>

          <p className="fw-bold mb-2">$ {product.price}</p>

          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-dark btn-sm mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
