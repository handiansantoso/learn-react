import { useEffect, useState } from "react";
import { SWIGGY_DETAIL_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [detail, setDetail] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const data = await fetch(SWIGGY_DETAIL_URL + id);
    const json = await data.json();
    setDetail(json?.data?.cards[2]?.card?.card?.info);
    const { cards } = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    for (let i = 0; i <= 5; i++) {
      if (cards[i].card?.card?.itemCards !== undefined)
        setMenu(cards[i].card?.card?.itemCards);
    }
  };
  return [detail, menu];
};

export default useRestaurantMenu;
