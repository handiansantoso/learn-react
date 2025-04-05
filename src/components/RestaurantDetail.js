import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { SWIGGY_ITEM_CAT } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [detail, category] = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  const filteredCategory = category.filter((c) => {
    return c?.card?.card["@type"] === SWIGGY_ITEM_CAT;
  });
  if (detail === null) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{detail.name}</h1>
      <h2>{detail.costForTwoMessage}</h2>
      <h2>
        {detail.areaName}, {detail.city}
      </h2>
      <h3>
        {filteredCategory.map((c, index) => {
          return (
            <RestaurantCategory
              key={c.card.card.categoryId}
              title={c.card.card.title}
              items={c.card.card.itemCards}
              show={showIndex === index}
              setShowIndex={() =>
                showIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
            />
          );
        })}
      </h3>
    </div>
  );
};

export default RestaurantDetail;
