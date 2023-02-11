import { Link } from "react-router-dom";

const GenderCard = () => {
  return (
    <div className="flex flex-col text-center justify-center my-24 mx-2">
      <h1 className="font-black uppercase text-3xl">Discover products</h1>
      <h1 className="font-normal text-lg mt-8">
        Define Yourself with best quality Outfit
      </h1>
      <div className="flex flex-row w-full justify-center justify-items-center mt-6">
        <div className="flex mr-4">
          <Link to="/products?sex=male&sex=unisex">
            <button
              type="button"
              className="focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
            >
              For men
            </button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/products?sex=female&sex=unisex">
            <button
              type="button"
              className="focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
            >
              For women
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link to="/products">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-10 py-2.5 mt-2"
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GenderCard;
