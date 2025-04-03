import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {
    const data = useRestaurantList();
    const [res, setRes] = useState(data);
    const [search, setSearch] = useState('');
    
    useEffect(()=>{
      setRes(data);
    },[data]);
    if(data.length === 0)
        return (<Shimmer />);
    
    return (
      <div className="body">
        <div className="search m-4"><input type="text" className="border" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button className="px-4 py-2 bg-green-200 m-4" onClick={()=>{
                const filtered = data.filter(d => d.info.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
                setRes(filtered);
            }

            }>Search</button>
            <button className="px-4 py-2 bg-green-200 m-4" onClick={() => {
                const filtered = data.filter(d => d.info.avgRating > 4.5);
                setRes(filtered);
            }}>Filter restaurant</button>
        </div>
        <div className="res-container flex flex-wrap">
          {
            res.map(data => (<Link key={data.info.id} to={"/restaurant/"+data.info.id}><RestaurantCard key={data.info.id} restoData={ data } /></Link>))
          }
        </div>
      </div>
    );
  }

export default Body;