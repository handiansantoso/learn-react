import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, items, show, setShowIndex } = props;
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 p-5 rounded-2xl">
      <div
        className=" cursor-pointer"
        onClick={setShowIndex}
      >
        <div className=" flex justify-between shadow-2xl">
          <span className="text-bold text-xl">
            {title} ({items.length})
          </span>
          <span className="text-xl">⇂</span>
        </div>
      </div>
      {show && <ItemList items={items}></ItemList>}
    </div>
  );
};
export default RestaurantCategory;
