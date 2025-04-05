import { useState } from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((m) => (
        <div key={m.card.info.id} className="p-2 m-2 border-b-2 border-gray-200">
          <div className="flex justify-between">
            <span className="font-bold text-xl">{m.card.info.name}</span>
            <span>₹ {m.card.info.price/100 || m.card.info.defaultPrice/100}</span>
          </div>
          <div className="text-xs">
            <span>{m.card.info.description}</span>
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
