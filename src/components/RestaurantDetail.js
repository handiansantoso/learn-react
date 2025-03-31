import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SWIGGY_DETAIL_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        loadData();
    },[id]);

    const loadData = async () => {
        const data = await fetch(SWIGGY_DETAIL_URL + id);
        const json = await data.json();
        setDetail(json?.data?.cards[2]?.card?.card?.info);
        const {cards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
        for(let i = 0; i <= 5; i++){
            if(cards[i].card?.card?.itemCards !== undefined)
                setMenu(cards[i].card?.card?.itemCards);
        }
    }

    if(detail === null)
        return (<Shimmer />);
    return (
        <div>
            <h1>{detail.name}</h1>
            <h2>{detail.costForTwoMessage}</h2>
            <h2>
                {detail.areaName}, {detail.city}
            </h2>
            <h3>
                Menu list:
                <ul>
                    {menu.map((m) => {
                        return (<li key={m.card.info.id}>{m.card.info.name} {m.card.info.defaultPrice / 100 || m.card.info.price / 100}</li>);
                    })}
                </ul>
            </h3>
        </div>
    )
}

export default RestaurantDetail;