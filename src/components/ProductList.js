import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    let params = [];
    let sexFilter = searchParams.getAll("sex");

    if (props.selectedCategory !== "") {
      params.push(["category", props.selectedCategory]);
    }

    if (sexFilter !== []) {
      sexFilter.forEach((value) => params.push(["sex", value]));
    }

    let url = new URL("http://localhost:3000/products");
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [props.selectedCategory]);

  return (
    <div>
      <div className="flex mb-4"></div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product, id) => (
          <div key={id} className="mb-6">
            <div className="group relative">
              <Link to={`/products/${product.id}`}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.mark}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {" "}
                      {product.name}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price} PLN
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
