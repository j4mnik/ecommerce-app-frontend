import FeaturedCardImage from "../assets/featured-card-img.jpg";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-lg place-content-between bg-blue-100 mt-6 transition ease-in-out delay-150 hover:bg-blue-200 duration-700">
      <div className="flex flex-col justify-items-center w-full text-center justify-around place-items-center rounded-lg py-14 px-4 my-8 sm:my-32">
        <h1 className="font-black text-3xl mb-8">
          Become extraordinary with Nike Air Max 97
        </h1>
        <Link to="/products/23">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm sm:text-md px-4 py-2.5 sm:px-8 sm:py-3 "
          >
            Discover
          </button>
        </Link>
      </div>
      <img
        src={FeaturedCardImage}
        alt="Featured card image"
        className="rounded-lg w-full sm:h-auto sm:w-1/4  duration-300 "
      />
    </div>
  );
};

export default FeaturedCard;
