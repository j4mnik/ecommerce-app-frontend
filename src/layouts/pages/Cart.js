import CartList from "../../components/CartList";
import FeaturedCard from "../../components/FeaturedCard";
import GenderCard from "../../components/GenderCard";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

const Cart = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="items-center justify-center mx-4 sm:mx-8">
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
