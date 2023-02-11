import React, { useEffect, useState } from "react";

function CategoryFilter(props) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    props.onCategoryChange(selectedCategory);
  };

  const resetCategory = (event) => {
    const selectedCategory = "";
    setSelectedCategory(selectedCategory);

    props.onCategoryReset(selectedCategory);
  };

  return (
    <div className="flex flex-col mt-8 w-full">
      <h2 className="font-semibold text-xl">Category list</h2>
      <div className="flex flex-wrap lg:flex-row justify-items-center place-items-center mt-2">
        {categories.map((category, id) => {
          return (
            <div key={id} className="">
              <button
                className="border border-gray-300 px-4 py-2 mr-4 mt-2 text-sm rounded-lg hover:border-gray-400"
                value={category.id}
                onClick={handleCategoryChange}
              >
                {category.name}
              </button>
            </div>
          );
        })}
        <button
          className="border border-gray-300 px-4 py-2 mr-4 mt-2 text-sm rounded-lg hover:border-gray-400 disabled:cursor-not-allowed disabled:border-gray-300"
          onClick={resetCategory}
          disabled={selectedCategory === ""}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;
