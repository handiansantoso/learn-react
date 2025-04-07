import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const click = (e) => {
        dispatch(addCart(e));
    }
  return (
    <div>
      {items.map((m) => (
        <div
          key={m.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200"
        >
            <div className="flex justify-between">
          <div>
            <div className="flex justify-between">
              <span className="font-bold text-xl">{m.card.info.name}</span>
              <span>
                ₹ {m.card.info.price / 100 || m.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs">
              <span>{m.card.info.description}</span>
            </div>
          </div>
          <div>
            <button className="p-4 m-4 cursor-pointer bg-pink-200" onClick={() => click(m)}>Add</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
