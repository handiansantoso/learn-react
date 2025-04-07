import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearClick = () =>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center w-6/12">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="p-2 m-2 bg-yellow-100 cursor-pointer" onClick={clearClick}>Clear Cart</button>
      <ItemList items={items} />
    </div>
  );
};
export default Cart;
