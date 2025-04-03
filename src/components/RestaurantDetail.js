import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetail = () => {
    const {id} = useParams();
    const [detail, menu] = useRestaurantMenu(id);

    if(detail === null)
        return (<Shimmer />);
    return (
        <div className="px-3">
            <h1 className="text-3xl py-5">{detail.name}</h1>
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