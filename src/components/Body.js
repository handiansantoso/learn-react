import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {
    const [data, setData] = useState([]);
    const [res, setRes] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(data.length === 0)
        return (<Shimmer />);
    return (
      <div className="body">
        <div className="search"><input type="text" className="search-box" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button className="search-button" onClick={()=>{
                const filtered = data.filter(d => d.info.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
                setRes(filtered);
            }

            }>Search</button>
            <button onClick={() => {
                const filtered = data.filter(d => d.info.avgRating > 4.5);
                setRes(filtered);
            }}>Filter restaurant</button>
        </div>
        <div className="res-container">
          {
            res.map(data => (<Link key={data.info.id} to={"/restaurant/"+data.info.id}><RestaurantCard key={data.info.id} restoData={ data } /></Link>))
          }
        </div>
      </div>
    );
  }

export default Body;