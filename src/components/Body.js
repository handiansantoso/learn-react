import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [res, setRes] = useState(restoList);
    const [search, setSearch] = useState('');
    return (
      <div className="body">
        <div className="search"><input type="text" className="search-box" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button className="search-button" onClick={()=>{
                const filtered = restoList.filter(d => d.info.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
                setRes(filtered);
            }

            }>Search</button>
            <button onClick={() => {
                const filtered = restoList.filter(d => d.info.avgRating > 4.5);
                setRes(filtered);
            }}>Filter restaurant</button>
        </div>
        <div className="res-container">
          {
            res.map(data => (<RestaurantCard key={data.info.id} restoData={ data } />))
          }
        </div>
      </div>
    );
  }

export default Body;