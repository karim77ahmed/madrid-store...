import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <section>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search Phone..." value={search}
            onChange={(e) => { const value = e.target.value; setSearch(value); }} />
        </div>
        <section className="phone-list">
          {filteredProducts.map((product) => (
            <div className="phone-card" key={product.id}>
              <img src={product.images[0]} alt={product.name} />
              <h2>{product.title}</h2>
              <p>{product.brand} </p>
              <h3>{product.price} $ </h3>
              <Link to={`/Buy-Now`} state={{ phoneID: product.id, phoneName: product.title }} >Buy Now</Link>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
