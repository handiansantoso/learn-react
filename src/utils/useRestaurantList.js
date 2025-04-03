import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./constants";

const useRestaurantList = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return data;
};
export default useRestaurantList;
