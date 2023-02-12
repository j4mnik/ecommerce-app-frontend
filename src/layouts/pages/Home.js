import FeaturedCard from "../../components/FeaturedCard";
import GenderCard from "../../components/GenderCard";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="items-center justify-center mx-4 sm:mx-8">
        <Search />
        <FeaturedCard />
        <GenderCard />
      </div>
    </div>
  );
};

export default Home;
