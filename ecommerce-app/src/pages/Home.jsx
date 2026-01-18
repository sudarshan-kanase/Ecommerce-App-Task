/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();

        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "all") {
      temp = temp.filter((item) => item.category?.name === category);
    }

    if (sort === "low") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFiltered(temp);
  }, [search, category, sort, products]);

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Products</h4>

      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="all">All Categories</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Toys">Toys</option>
          </select>

        </div>


        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}


