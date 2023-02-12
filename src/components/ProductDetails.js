import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedItemInfo, setAddedItemInfo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProduct(data.find((item) => item.id === Number(id)));
    }

    fetchData();
  }, [id]);

  function handleAddToCart() {
    if (!selectedSize) {
      return alert("Please select a size");
    }

    const savedCart = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : [];
    savedCart.push({
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: product.price,
      image: product.image,
    });
    sessionStorage.setItem("cart", JSON.stringify(savedCart));

    setAddedItemInfo(true);
  }

  return product ? (
    <div className="flex flex-col w-full place-items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-center my-8">
        <div className="flex w-full sm:w-1/2 justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-screen sm:w-2/3 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0 text-left">
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">{product.mark}</h2>
            <h2 className="font-normal text-lg">{product.name}</h2>
            <div className="mt-2">
              <h2 className="font-normal text-md">{product.primary_color}</h2>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-normal text-md mb-2">Sizes</h2>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {size}
              </button>
            ))}
          </div>
          {selectedSize && <p>Selected size: {selectedSize}</p>}

          <div className="mt-8">
            <h2 className="font-normal text-md">{product.price} PLN</h2>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleAddToCart(product)}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col my-8">
            <h2 className="font-normal text-lg">Description</h2>
            <p className="font-normal text-md mt-2">
              It's {product.name} made of {product.main_material}. Official{" "}
              {product.mark} distribution. Sex: {product.sex}, Primary color:{" "}
              {product.primary_color}.
            </p>
          </div>
        </div>
      </div>
      {addedItemInfo && (
        <div className="absolute flex flex-col bg-white border border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out m-2">
          <p className="font-semibold text-lg text-gray-700 mb-2">
            Added successfully item to cart
          </p>
          <div className="flex flex-row w-full justify-around my-4">
            <button
              onClick={() => setAddedItemInfo(false)}
              className="px-6 py-1 font-medium text-gray-700 rounded-lg hover:text-gray-900"
            >
              Continue
            </button>
            <Link to="/cart">
              <p className="bg-blue-400 px-6 py-1 rounded-lg font-medium text-white hover:bg-blue-500 duration-300">
                Go to cart
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetails;
