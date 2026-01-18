import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

  const { cartItems } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">

      <div className="container">

        
        <Link className="navbar-brand fw-bold" to="/">
          Shopi
        </Link>

        <div className="collapse navbar-collapse show">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">All</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/clothes">Clothes</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/electronics">Electronics</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/furniture">Furnitures</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/toys">Toys</Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">

            {user ? (
              <>

                <span className="text-muted small d-none d-md-block">
                  {user.email}
                </span>

                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={logout}
                >
                  Logout
                </button>
                
              </>
            ) : (

              <>

                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>

              </>
              
            )}


            
            <Link className="nav-link fw-semibold" to="/cart">
              🛒 {cartItems.length}
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

