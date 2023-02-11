import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, products]);

  useEffect(() => {
    setIsHidden(query.length < 2);
  }, [query]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center">
        <div className="w-fit">
          <input
            type="search"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            className="
        form-control
        block
        w-full
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        m-0
      "
            id="exampleSearch"
            placeholder="Type a product"
          />
        </div>
      </div>
      <div className="flex justify-center justify-items-center">
        <div
          className={`absolute z-20 mt-2 bg-white border border-gray-300 rounded-lg w-full xl:w-1/3 overflow-y-scroll max-h-96 mb-20 ${
            isHidden ? "hidden" : ""
          }`}
        >
          <div className="text-left">
            {filteredProducts.map((product, id) => {
              return (
                <div key={id} className="w-full">
                  <Link
                    className="flex justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-200 duration-700"
                    to={`/products/${product.id}`}
                  >
                    <div className="flex flex-col m-2">
                      <p>{product.name}</p>
                      <p className="text-gray-700 mt-2">{product.price} PLN</p>
                    </div>
                    <img
                      src={product.image}
                      alt={product.image}
                      className="w-16 rounded-lg"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
