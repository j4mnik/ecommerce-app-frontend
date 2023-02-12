import React, { useState } from "react";
import CategoryFilter from "../../components/CategoryFilter";
import ProductList from "../../components/ProductList";
import SearchForm from "../../components/Search";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const resetCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
      <div className="flex flex-col w-full place-items-center justify-center ">
        <div className="mx-4 sm:mx-8 w-10/12">
          <SearchForm />
          <CategoryFilter
            onCategoryChange={handleCategoryChange}
            onCategoryReset={resetCategory}
          />
          <ProductList selectedCategory={selectedCategory} />
        </div>
      </div>
  );
}

export default Products;
