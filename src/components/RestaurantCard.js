import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props.restoData;
    return (
      <div className="res-card">
        <img src={CDN_URL + info.cloudinaryImageId}  className="res-logo"></img>
        <h3>{info.name}</h3>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.avgRating} Rating</h4>
        <h4>{info.costForTwo}</h4>
        <h4>{info.sla.deliveryTime} mins</h4>
      </div>
    );
  }
export default RestaurantCard;