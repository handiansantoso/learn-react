import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props.restoData;
    return (
      <div className="res-card bg-gray-100 hover:bg-gray-200 w-52 p-4 m-4 rounded-2xl">
        <img src={CDN_URL + info.cloudinaryImageId}  className="rounded-2xl h-50"></img>
        <h3 className="py-5 font-bold text-xl">{info.name}</h3>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.avgRating} Rating</h4>
        <h4>{info.costForTwo}</h4>
        <h4>{info.sla.deliveryTime} mins</h4>
      </div>
    );
  }
export default RestaurantCard;