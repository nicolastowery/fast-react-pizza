import { Link } from "react-router-dom";
import cartSlice, {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
function CartOverview() {
  // redux recommends this method for calculating state, not out in the component but rather in the decleration
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(totalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4  font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/fast-react-pizza/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
