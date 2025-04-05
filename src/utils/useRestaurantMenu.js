import { useEffect, useState } from "react";
import { SWIGGY_DETAIL_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [detail, setDetail] = useState(null);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const data = await fetch(SWIGGY_DETAIL_URL + id);
    const json = await data.json();
    setDetail(json?.data?.cards[2]?.card?.card?.info);
    const { cards } = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    setCategory(cards);
  };
  return [detail, category];
};

export default useRestaurantMenu;
