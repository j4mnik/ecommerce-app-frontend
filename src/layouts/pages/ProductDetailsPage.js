import Navbar from "../../components/Navbar";
import SearchForm from "../../components/Search";
import ProductDetails from "../../components/ProductDetails";

const ProductDetailPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex flex-col mx-4 sm:mx-8 w-10/12">
        <SearchForm />
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDetailPage;
